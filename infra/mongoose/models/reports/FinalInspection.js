const mongoose = require('mongoose');

const FinalInspectionSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'OrderModel',
	},
});

const FinalInspectionReport = mongoose.model(
	'FinalInspectionReport',
	FinalInspectionSchema
);

module.exports = FinalInspectionReport;
