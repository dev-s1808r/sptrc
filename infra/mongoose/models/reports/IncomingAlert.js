const mongoose = require('mongoose');

const IncomingAlertSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const IncomingAlertModel = mongoose.model(
	'IncomingAlertModel',
	IncomingAlertSchema
);

module.exports = IncomingAlertModel;
