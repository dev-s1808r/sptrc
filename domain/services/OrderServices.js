class OrderServices {
	constructor({ interfaceOrder, makeOrder, orderSerializer }) {
		this.orderInterface = interfaceOrder;
		this.makeOrder = makeOrder;
		this.serialize = orderSerializer;
	}

	generateOrder(args) {
		let order = this.makeOrder(args);
		return {
			sid: order.getSid(),
			IncomingAlert: order.getIncomingAlertId(),
			CheckSheet: order.getCheckSheetId(),
			DamageReport: order.getDamageReportId(),
			InProcessInspectionReport: order.getInProcessInspectionReportId(),
			OldBearingReport: order.getOldBearingReportId(),
			NewBearingReport: order.getNewBearingReportId(),
			ElectricalTestReport: order.getElectricalTestReportId(),
			FinalInspectionReport: order.getFinalInspectionReportId(),
			TestingAndBalancingReport: order.getTestingAndBalancingReportId(),
			qrCodeUrl: order.getQrCodeUrl(),
		};
	}

	async findOrder(query) {
		try {
			const order = await this.orderInterface.listOrders(query);
			if (!order || order.length === 0) {
				return false;
			}
			let orderArray = this.serialize(order);
			return orderArray;
		} catch (error) {
			throw error;
		}
	}

	async createOrder(orderData) {
		try {
			let data = await this.orderInterface.createOrder(orderData);
			return data;
		} catch (error) {
			console.log(error, 'occurred inside order service');
			throw error;
		}
	}

	async updateOrder(args) {
		try {
			const result = await this.orderInterface.updateOrder(args);
			return result;
		} catch (error) {
			console.log(error, 'occurred inside order service');
			throw error;
		}
	}

	serializeOrder(order) {
		return this.serialize(order);
	}
}

module.exports = OrderServices;
