const orderRepository = require('../../infra/mongoose/repository/OrdersRepository');

class UpdateReportValue {
	constructor(repository) {
		this.repository = repository;
	}
	async execute({ reportId, reportName, orderId, field, value }) {
		try {
			let order = await this.repository.updateReportValue({
				reportId,
				reportName,
				orderId,
				field,
				value,
			});
			console.log(order, 'from use case');
			return order;
		} catch (error) {
			console.log(error.message, 'error from Update Report Value');
			throw new Error(error.message);
		}
	}
}

const updateReportValue = new UpdateReportValue(orderRepository);
module.exports = updateReportValue;
