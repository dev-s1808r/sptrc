const mongoose = require('mongoose');

const TestingBalancingReportSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const TestingBalancingReport = mongoose.model(
	'TestingBalancingReport',
	TestingBalancingReportSchema
);

module.exports = TestingBalancingReport;
