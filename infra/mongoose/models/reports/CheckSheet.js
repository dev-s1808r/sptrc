const mongoose = require('mongoose');

const CheckSheetSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const CheckSheet = mongoose.model('CheckSheet', CheckSheetSchema);

module.exports = CheckSheet;
