const mongoose = require('mongoose');

const FinalInspectionReportSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'OrderModel',
	},
});

const FinalInspectionReport = mongoose.model(
	'FinalInspectionReport',
	FinalInspectionReportSchema
);

module.exports = FinalInspectionReport;
