const reports = require('../models/reports');

class OrderRepository {
	constructor(reports) {
		this.reports = reports;
	}

	throwError(action, error) {
		console.log(error.message);
		throw new Error(`Error occurred while ${action}: `, error.message);
	}

	async returnOrder(orderId) {
		try {
			const Order = await reports['Order'].findById(orderId);
			if (!Order) {
				return null;
			}
			console.log(Order._id);
			return Order;
		} catch (error) {
			this.throwError('finding order by id: ', error);
		}
	}

	async findOrderId(SID) {
		try {
			console.log('finding order for SID: ', SID);
			const isOrder = await reports['Order'].findOne({ SID });
			if (!isOrder) {
				return null;
			}
			console.log(isOrder._id);
			return isOrder._id;
		} catch (error) {
			console.log(error);
			this.throwError('finding order by SID: ', error);
		}
	}

	async findAllOrders() {
		try {
			const orders = await this.reports['Order'].find();
			console.log(orders, 'from order repo');
			return orders;
		} catch (error) {
			console.log(error);
			this.throwError('finding all orders: ', error);
		}
	}

	returnReportTitles() {
		const titleArray = Object.keys(this.reports);
		console.log(titleArray, 'title array from repo function');
		return titleArray;
	}

	validateKeyOnObject(object, key) {
		console.log(object);
		let prop = Object.keys(object.toObject());
		if (prop.includes(key)) {
			return true;
		}
		return false;
	}

	async createReportsForOrder(orderId) {
		let reports = Object.keys(this.reports);
		reports.shift();
		let createdReports = {};
		for (const report of reports) {
			try {
				let newReport = await this.reports[report]({ orderId: orderId });
				let result = await newReport.save();
				createdReports[report] = result._id; // Store the report ID
			} catch (error) {
				this.throwError('generating all reports: ', error);
			}
		}

		console.log(createdReports);
		return createdReports;
	}

	async createNewOrder(reportName, SID) {
		try {
			const newOrder = this.reports[reportName]({ SID });
			const result = await newOrder.save();
			console.log(result, 'from create new order');
			return result;
		} catch (error) {
			this.throwError('saving order: ', error);
		}
	}

	async attachReportsOnOrder(orderId) {
		try {
			let order = await this.returnOrder(orderId);
			if (!order) {
				console.log('tried to access unavailable order');
				return null;
			}
			let allReportsObject = await this.createReportsForOrder(orderId);
			console.log(allReportsObject, 'from attach function');
			Object.assign(order, allReportsObject);
			await order.save();
			console.log(order);
			return order;
		} catch (error) {
			this.throwError('while attaching reports: ', error);
		}
	}

	async updateOrderForm(reportId, field, value) {
		try {
			let order = await this.returnOrder(reportId);
			console.log('validating');
			let isKey = this.validateKeyOnObject(order, field);
			if (!isKey) {
				throw new Error('invalid key submitted');
			}
			console.log('validation done');
			order[field] = value;
			let result = await order.save();
			console.log('result', result, 'order:', order);
			return result;
		} catch (error) {
			this.throwError('updating Order form', error);
		}
	}
}

const orderRepository = new OrderRepository(reports);
module.exports = orderRepository;
