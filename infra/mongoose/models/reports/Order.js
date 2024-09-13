const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
	SID: {
		type: String,
		required: true,
	},
	customerName: {
		type: String,
		default: null,
	},
});

const OrderModel = mongoose.model('OrderModel', OrderSchema);
module.exports = OrderModel;
