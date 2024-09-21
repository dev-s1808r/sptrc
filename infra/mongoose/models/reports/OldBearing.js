const mongoose = require('mongoose');

const OldBearingSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
});

const OldBearingReport = mongoose.model('OldBearingReport', OldBearingSchema);

module.exports = OldBearingReport;
