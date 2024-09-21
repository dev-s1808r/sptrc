class InterfaceReport {
	constructor(repository) {
		this.repository = repository;
	}

	async createReport(args) {
		try {
			const result = await this.repository.createReport(args);
			return result;
		} catch (error) {
			console.log('error in Report data access repo', error.message);
			throw error;
		}
	}

	async findReportById(args) {
		try {
			const result = await this.repository.findReportById(args);
			return result;
		} catch (error) {
			console.log('error in Report data access repo', error.message);
			throw error;
		}
	}

	async updateReport(args) {
		try {
			const result = await this.repository.updateReport(args);
			return result;
		} catch (error) {
			console.log('error in Report data access repo', error.message);
			throw error;
		}
	}

	async deleteReport(args) {
		try {
			const result = await this.repository.deleteReport(args);
			return result;
		} catch (error) {
			console.log('error in Report data access repo', error.message);
			throw error;
		}
	}

	async listReports(args) {
		try {
			const result = await this.repository.listReports(args);
			return result;
		} catch (error) {
			console.log('error in Report data access repo', error.message);
			throw error;
		}
	}
}

module.exports = InterfaceReport;
