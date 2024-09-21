const mongoose = require('mongoose');

const InProcessInspectionSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const InProcessInspectionReport = mongoose.model(
	'InProcessInspectionReport',
	InProcessInspectionSchema
);

module.exports = InProcessInspectionReport;
