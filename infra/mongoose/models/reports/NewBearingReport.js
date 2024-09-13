const mongoose = require('mongoose');

const NewBearingReportSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const NewBearingReport = mongoose.model(
	'NewBearingReport',
	NewBearingReportSchema
);

module.exports = NewBearingReport;
