const mongoose = require('mongoose');

const CheckSheetSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const CheckSheetModel = mongoose.model('CheckSheetModel', CheckSheetSchema);

module.exports = CheckSheetModel;
