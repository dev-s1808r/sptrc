const orderRepository = require('../../infra/mongoose/repository/OrdersRepository');

class CreateNewOrder {
	constructor(repository) {
		this.repository = repository;
	}

	async execute(SID, reportName) {
		try {
			const isOrder = await this.repository.findOrderId(SID);
			if (isOrder) {
				throw new Error(`${isOrder} order already exists`);
			}
			const order = await this.repository.createNewOrder(reportName, SID);
			const orderReport = await this.repository.attachReportsOnOrder(order._id);

			console.log(orderReport);
			return orderReport;
		} catch (error) {
			console.log(error.message);
			throw error;
		}
	}
}

const createNewOrder = new CreateNewOrder(orderRepository);

module.exports = createNewOrder;
