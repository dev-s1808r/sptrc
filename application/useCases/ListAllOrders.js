const orderRepository = require('../../infra/mongoose/repository/OrdersRepository');

class ListAllOrders {
	constructor(repository) {
		this.repository = repository;
	}
	async execute() {
		try {
			const result = await this.repository.findAllOrders();
			return result;
		} catch (error) {
			console.log(error.message);
			throw new Error(error.message);
		}
	}
}

const listAllOrders = new ListAllOrders(orderRepository);
module.exports = listAllOrders;
