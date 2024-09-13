const reports = require('../models/reports');
console.log(reports, 'reports from order repo');

class OrderRepository {
	constructor(reports) {
		this.reports = reports;
	}

	throwError(action, error) {
		console.log(error.message);
		throw new Error(`Error occurred while ${action}: `, error.message);
	}

	async returnOrder(id) {
		try {
			const Order = await reports['OrderModel'].findById(id);
			if (!idOrder) {
				return null;
			}
			console.log(Order._id);
			return Order;
		} catch (error) {
			this.throwError('finding order by id: ', error.message);
		}
	}

	async findOrderId(SID) {
		try {
			console.log('finding order for SID: ', SID);
			const isOrder = await reports['OrderModel'].findOne({ SID });
			if (!isOrder) {
				return null;
			}
			console.log(isOrder._id);
			return isOrder._id;
		} catch (error) {
			console.log(error);
			this.throwError('finding order by SID: ', error.message);
		}
	}

	async findAllOrders() {
		try {
			const orders = await this.reports['OrderModel'].find();
			console.log(orders, 'from order repo');
			return orders;
		} catch (error) {
			console.log(error);
			this.throwError('finding all orders: ', error);
		}
	}

	async createNewOrder(reportName, SID) {
		try {
			const newOrder = this.reports[reportName]({ SID });
			const result = await newOrder.save();
			console.log(result, 'from create new order');
			return result;
		} catch (error) {
			this.throwError('saving order: ', error.message);
		}
	}
}

const orderRepository = new OrderRepository(reports);
module.exports = orderRepository;
