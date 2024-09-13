const mongoose = require('mongoose');

const InspectionReportSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const InspectionReportModel = mongoose.model(
	'InspectionReportModel',
	InspectionReportSchema
);

module.exports = InspectionReportModel;
