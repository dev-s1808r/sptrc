const mongoose = require('mongoose');

const ElectricalTestSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const ElectricalTestReport = mongoose.model(
	'ElectricalTestReport',
	ElectricalTestSchema
);

module.exports = ElectricalTestReport;
