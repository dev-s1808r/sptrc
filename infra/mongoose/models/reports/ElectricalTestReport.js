const mongoose = require('mongoose');

const ElectricalTestReportSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const ElectricalTestReport = mongoose.model(
	'ElectricalTestReport',
	ElectricalTestReportSchema
);

module.exports = ElectricalTestReport;
