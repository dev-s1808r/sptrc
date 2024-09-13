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
			const result = await this.repository.createNewOrder(reportName, SID);
			console.log(result);
			return result;
		} catch (error) {
			console.log(error.message);
			throw error;
		}
	}
}

const createNewOrder = new CreateNewOrder(orderRepository);

module.exports = createNewOrder;
