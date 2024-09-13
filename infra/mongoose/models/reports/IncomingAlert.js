const mongoose = require('mongoose');

const IncomingAlertSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const IncomingAlert = mongoose.model('IncomingAlert', IncomingAlertSchema);

module.exports = IncomingAlert;
