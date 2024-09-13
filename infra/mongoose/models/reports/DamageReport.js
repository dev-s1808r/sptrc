const mongoose = require('mongoose');

const DamageReportSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const DamageReportModel = mongoose.model(
	'DamageReportModel',
	DamageReportSchema
);

module.exports = DamageReportModel;
