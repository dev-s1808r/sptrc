const { orderServices, reportServices } = require('../../domain/services');

class CreateNewOrder {
	constructor(orderServices, reportServices) {
		this.order = orderServices;
		this.report = reportServices;
	}

	async isOrder(sid) {
		try {
			const isOrder = await this.order.findOrder({ f: 'sid', v: sid });
			if (isOrder) {
				throw new Error(`${isOrder[0].sid} order already exists`);
			}
		} catch (error) {
			console.log(error.message);
			throw error;
		}
	}

	async generateOrder(args) {
		try {
			return this.order.generateOrder(args);
		} catch (error) {
			console.log(
				'error while generating order in the use case, ',
				error.message
			);
			throw error;
		}
	}

	async createNewReport(args) {
		try {
			let report = await this.report.createReport(args);
			return report;
		} catch (error) {
			console.log(error.message, 'from use case while creating the report');
			throw error;
		}
	}

	async bindReport(data) {
		const { orderId, reportName, reportId } = data;
		try {
			let result = await this.order.updateOrder({
				orderId: orderId,
				f: reportName,
				v: reportId,
			});
			console.log(result);
			return result;
		} catch (error) {
			console.log(error.message, 'from use case while creating the report');
			throw error;
		}
	}

	async createAndBindReport(args) {
		const { orderId, reportName } = args;
		let report = await this.createNewReport({
			orderId,
			reportName,
		});
		let reportId = report.id;
		let bindReport = await this.bindReport({ orderId, reportName, reportId });
		console.log(bindReport, 'from bind report');
		return bindReport;
	}

	async bindAllReports(orderId) {
		let updatedOrder = await this.createAndBindReport({
			orderId,
			reportName: 'IncomingAlert',
		});
		updatedOrder = await this.createAndBindReport({
			orderId,
			reportName: 'CheckSheet',
		});
		updatedOrder = await this.createAndBindReport({
			orderId,
			reportName: 'DamageReport',
		});
		updatedOrder = await this.createAndBindReport({
			orderId,
			reportName: 'InProcessInspectionReport',
		});
		updatedOrder = await this.createAndBindReport({
			orderId,
			reportName: 'OldBearingReport',
		});
		updatedOrder = await this.createAndBindReport({
			orderId,
			reportName: 'NewBearingReport',
		});
		updatedOrder = await this.createAndBindReport({
			orderId,
			reportName: 'ElectricalTestReport',
		});
		updatedOrder = await this.createAndBindReport({
			orderId,
			reportName: 'FinalInspectionReport',
		});
		updatedOrder = await this.createAndBindReport({
			orderId,
			reportName: 'TestingAndBalancingReport',
		});
		return updatedOrder;
	}

	async execute(sid) {
		try {
			await this.isOrder(sid);
			const newOrder = this.order.generateOrder({ sid });
			const order = await this.order.createOrder(newOrder);
			let orderId = order._id;
			let updatedOrder = await this.bindAllReports(orderId);
			return this.order.serializeOrder(updatedOrder);
		} catch (error) {
			console.log(error.message);
			throw error;
		}
	}
}

const createNewOrder = new CreateNewOrder(orderServices, reportServices);

module.exports = createNewOrder;
