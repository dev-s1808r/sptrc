const mongoose = require('mongoose');

const NewBearingSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const NewBearingReport = mongoose.model('NewBearingReport', NewBearingSchema);

module.exports = NewBearingReport;
