const mongoose = require('mongoose');

const OldBearingReportSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const OldBearingReportModel = mongoose.model(
	'OldBearingReportModel',
	OldBearingReportSchema
);

module.exports = OldBearingReportModel;
