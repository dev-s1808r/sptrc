class ReportServices {
	constructor({ interfaceReport, reportValidator }) {
		this.reportInterface = interfaceReport;
		this.reportValidator = reportValidator;
	}

	async createReport(args) {
		try {
			const result = await this.reportInterface.createReport(args);
			return result;
		} catch (error) {
			console.log('error while creating reports', error.message);
			throw error;
		}
	}

	async returnReport(args) {
		try {
			const result = await this.reportInterface.findReportById(args);
			if (!result || result.length === 0) {
				return false;
			}
			return result;
		} catch (error) {
			console.log('error while returning report');
		}
	}

	async isReport(reportId) {}

	async updateReport(args) {
		try {
			const result = await this.reportInterface.updateReport(reportId);
			if (!result || result.length === 0) {
				return false;
			}
			return result;
		} catch (error) {
			console.log('error while returning report');
		}
	}

	validateReportName(args) {
		const { reportName } = args;
		console.log(reportName, 'from validateReportName');
		return this.reportValidator.hasReport(reportName);
	}

	validateFieldName(args) {
		const { reportName, field } = args;
		return this.reportValidator.hasField(reportName, field);
	}
}

module.exports = ReportServices;
