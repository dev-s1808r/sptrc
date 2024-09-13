const mongoose = require('mongoose');

const FinalInspectionReportSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const FinalInspectionReportModel = mongoose.model(
	'FinalInspectionReportModel',
	FinalInspectionReportSchema
);

module.exports = FinalInspectionReportModel;
