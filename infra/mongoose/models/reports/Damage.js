const mongoose = require('mongoose');

const DamageSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const DamageReport = mongoose.model('DamageReport', DamageSchema);

module.exports = DamageReport;
