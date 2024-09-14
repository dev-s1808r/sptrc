const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
	SID: {
		type: String,
		required: true,
	},
	IncomingAlert: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'IncomingAlert',
	},
	CheckSheet: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'CheckSheet',
	},
	DamageReport: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'DamageReport',
	},
	InspectionReport: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'InspectionReport',
	},
	OldBearingReport: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'OldBearingReport',
	},
	NewBearingReport: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'NewBearingReport',
	},
	ElectricalTestReport: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'ElectricalTestReport',
	},
	FinalInspectionReport: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'FinalInspectionReport',
	},
	TestingBalancingReport: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'TestingBalancingReportId',
	},
	qrCodeUrl: {
		type: String,
		unique: true,
		default: null,
	},
});

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
