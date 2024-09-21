const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
	{
		sid: {
			type: String,
			required: true,
		},
		qrCodeUrl: {
			type: String,
			default: null,
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
			ref: 'Damage',
		},
		InProcessInspectionReport: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'InProcessInspection',
		},
		OldBearingReport: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'OldBearing',
		},
		NewBearingReport: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'NewBearing',
		},
		ElectricalTestReport: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'ElectricalTest',
		},
		FinalInspectionReport: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'FinalInspection',
		},
		TestingAndBalancingReport: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'TestingBalancingReport',
		},
	},
	{ timestamps: true }
);

const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;
