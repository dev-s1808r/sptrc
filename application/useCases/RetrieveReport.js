const orderRepository = require('../../infra/mongoose/repository/OrdersRepository');

class RetrieveReport {
	constructor(repository) {
		this.repository = repository;
	}

	async execute({ reportId, reportName, orderId }) {
		console.log(reportId, reportName, orderId, 'from retrieve report use case');
		try {
			let report = await this.repository.retrieveReport({
				reportId,
				reportName,
				orderId,
			});
			console.log(report, 'from useCase');
			return report;
		} catch (error) {
			console.log(error.message);
			throw new Error(error.message);
		}
	}
}

const retrieveReport = new RetrieveReport(orderRepository);
module.exports = retrieveReport;
