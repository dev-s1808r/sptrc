const mongoose = require('mongoose');

const OldBearingReportSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const OldBearingReport = mongoose.model(
	'OldBearingReportModel',
	OldBearingReportSchema
);

module.exports = OldBearingReport;
