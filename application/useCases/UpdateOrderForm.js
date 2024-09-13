const orderRepository = require('../../infra/mongoose/repository/OrdersRepository');

class UpdateOrderForm {
	constructor(repository) {
		this.repository = repository;
	}

	async execute(reportId, field, value) {
		try {
			let result = await this.repository.updateOrderForm(
				reportId,
				field,
				value
			);
			console.log(result);
			return result;
		} catch (error) {
			console.log(error.message, 'error from update order from');
			throw new Error(error.message);
		}
	}
}

const updateOrderForm = new UpdateOrderForm(orderRepository);
module.exports = updateOrderForm;
