const mongoose = require('mongoose');

const TestingBalancingSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const TestingBalancingReport = mongoose.model(
	'TestingBalancingReport',
	TestingBalancingSchema
);

module.exports = TestingBalancingReport;
