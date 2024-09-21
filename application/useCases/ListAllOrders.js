const { orderServices } = require('../../domain/services');

class ListOrders {
	constructor(orderServices) {
		this.order = orderServices;
	}
	async execute(args) {
		try {
			const result = await this.order.findOrder(args);
			return result;
		} catch (error) {
			console.log('error occurred in list order use case', error.message);
			throw error;
		}
	}
}

const listOrder = new ListOrders(orderServices);
module.exports = { listOrder };

// const orderRepository = require('../../infra/mongoose/repository/OrdersRepository');

// class ListAllOrders {
// 	constructor(repository) {
// 		this.repository = repository;
// 	}
// 	async execute() {
// 		try {
// 			const result = await this.repository.findAllOrders();
// 			return result;
// 		} catch (error) {
// 			console.log(error.message);
// 			throw new Error(error.message);
// 		}
// 	}
// }

// const listAllOrders = new ListAllOrders(orderRepository);
