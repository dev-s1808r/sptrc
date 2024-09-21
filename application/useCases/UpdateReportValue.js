const { orderServices, reportServices } = require('../../domain/services');

class UpdateReportValue {
	constructor({ orderServices, reportServices }) {
		this.order = orderServices;
		this.report = reportServices;
	}

	isValidReportName(reportName) {
		let valid = this.report.validateReportName({ reportName });
		if (!valid) {
			throw new Error('invalid report name:', reportName);
		}
		return valid;
	}

	isValidFieldName(args) {
		let { reportName, field } = args;
		let valid = this.report.validateFieldName({ reportName, field });
		if (!valid) {
			throw new Error(`invalid field name ${field} ${reportName}`);
		}
		return valid;
	}

	async isReport(args) {
		const report = await this.report.returnReport(args);
		if (!report) {
			throw new Error(`Report not found`);
		}
		return report;
	}

	async isOrder({ sid, orderId }) {
		try {
			const isOrder = await this.order.findOrder({ f: 'sid', v: sid });
			let order = isOrder[0]; //FIXME ?returns an array
			console.log(order, 'ORDER FROM IS ORDER : USE CASE TO UPDATE REPORT');
			if (!order) {
				throw new Error(`order does not exists`);
			}
			if (order.id != orderId) {
				throw new Error(
					`orderId and order id on SID do not match ${orderId}, ${isOrder[0].id}`
				);
			}
			return order;
		} catch (error) {
			console.log(error.message);
			throw error;
		}
	}

	matchReports(args) {
		let { sid, orderId, reportId, reportName, order, report } = args;
		console.log('fromm match reports \n', {
			sid,
			orderId,
			reportId,
			reportName,
			order,
			report,
		});
		if (order.sid !== sid) {
			throw new Error('sid does not match');
		}
		if (orderId !== order.id.toString()) {
			throw new Error('order id does not match');
		}
		if (order[reportName].toString() !== reportId) {
			throw new Error('report not on order');
		}
		if (!order.id.equals(report.orderId)) {
			console.log('report order mismatch', order.id, report.orderId);
			throw new Error('report order mismatch');
		}
		return true;
	}

	async execute(args) {
		const { sid, orderId, reportId, reportName, field, value } = args;
		this.isValidReportName(reportName);
		this.isValidFieldName({ reportName, field });
		let report = await this.isReport({ reportName, reportId });
		let order = await this.isOrder({ sid, orderId });
		this.matchReports({ sid, orderId, reportId, reportName, order, report });
		report[field] = value;
		await report.save();
		console.log(report);
		return report;
	}
	catch(error) {
		console.log(error.message, 'error from Update Report Value');
		throw new Error(error.message);
	}
}

const updateReportValue = new UpdateReportValue({
	orderServices,
	reportServices,
});
module.exports = updateReportValue;
