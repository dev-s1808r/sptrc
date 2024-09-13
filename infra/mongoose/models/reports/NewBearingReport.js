const mongoose = require('mongoose');

const NewBearingReportSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const NewBearingReportModel = mongoose.model(
	'NewBearingReportModel',
	NewBearingReportSchema
);

module.exports = NewBearingReportModel;
