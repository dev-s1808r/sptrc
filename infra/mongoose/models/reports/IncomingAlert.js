const mongoose = require('mongoose');

const IncomingAlertSchema = mongoose.Schema({
	orderId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Order',
	},
	customerName: {
		type: String,
		default: null,
	},
	isFirstTimeCustomer: {
		type: Boolean,
		default: false,
	},
	isPaymentOutstanding: {
		type: Boolean,
		default: false,
	},
	isCustomerInformedAboutOutstanding: {
		type: Boolean,
		default: false,
	},
	spindleDispatchOnlyAfterClearance: {
		type: Boolean,
		default: false,
	},
	whyDispatchWithoutClearance: {
		type: String,
		default: null,
	},
	natureOfProblem: {
		type: String,
		default: null,
	},
	spindleMake: {
		type: String,
		default: null,
	},
	spindleModel: {
		type: String,
		default: null,
	},
	taperSpecifications: {
		type: String,
		default: null,
	},
	spindleMaxRPM: {
		type: String,
		default: null,
	},
	spindleSerialNumber: {
		type: String,
		default: null,
	},
	spindleReceivedDate: {
		type: Date,
		default: null,
	},
	spindleType: {
		type: String,
		enum: ['beltDriven', 'directDriven', 'gearDriven', 'integrated'],
		default: 'beltDriven',
	},
	salesApproval: {
		type: String,
		default: false,
	},
	financeApproval: {
		type: String,
		default: false,
	},
});

const IncomingAlert = mongoose.model('IncomingAlert', IncomingAlertSchema);

module.exports = IncomingAlert;
