const mongoose = require('mongoose');

const InspectionReportSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const InspectionReport = mongoose.model(
	'InspectionReport',
	InspectionReportSchema
);

module.exports = InspectionReport;
