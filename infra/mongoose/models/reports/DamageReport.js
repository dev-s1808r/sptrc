const mongoose = require('mongoose');

const DamageReportSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const DamageReport = mongoose.model('DamageReport', DamageReportSchema);

module.exports = DamageReport;
