const mongoose = require('mongoose');

const TestingBalancingReportSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const TestingBalancingReportModel = mongoose.model(
	'TestingBalancingReportModel',
	TestingBalancingReportSchema
);

module.exports = TestingBalancingReportModel;
