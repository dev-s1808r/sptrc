const mongoose = require('mongoose');

const ElectricalTestReportSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const ElectricalTestReportModel = mongoose.model(
	'ElectricalTestReportModel',
	ElectricalTestReportSchema
);

module.exports = ElectricalTestReportModel;
