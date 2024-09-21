class MongoReportRepository {
	constructor(reports, throwError) {
		this.reports = reports;
		this.throwError = throwError;
	}

	// custom schema

	returnIdName(reportId, reportName) {
		return { reportId: reportId, reportName: reportName };
	}

	// crud functions

	async createReport(args) {
		const { orderId, sid, reportName } = args;
		try {
			const report = new this.reports[reportName]({ orderId });
			const result = await report.save();
			console.log(`${reportName} created for order ${sid}`);
			return { reportName, id: result._id };
		} catch (error) {
			this.throwError(error);
		}
	}

	async findReportById(args) {
		const { reportId, reportName } = args;
		try {
			let result = this.reports[reportName].findById(reportId);
			if (!result) {
				return false;
			}
			return result;
		} catch (error) {
			this.throwError(
				error,
				`finding report by id reportName: ${reportName}, reportId: ${reportId}`
			);
		}
	}

	async updateReport(args) {
		let { reportId, reportName, field, value } = args;
		let update = { [field]: value };
		try {
			const result = this.reports[reportName].findByIdAndUpdate(
				reportId,
				update,
				{ new: true }
			);
			return result;
		} catch (error) {
			this.throwError(error);
		}
	}
	async deleteReport() {
		throw new Error('method not implemented');
	}

	async listReports() {
		throw new Error('method not implemented');
	}
}

module.exports = MongoReportRepository;
