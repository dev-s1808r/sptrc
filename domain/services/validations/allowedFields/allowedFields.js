const allowedFields = {
	order: [
		'sid',
		'incomingAlert',
		'checkSheet',
		'damageReport',
		'inspectionReport',
		'oldBearingReport',
		'newBearingReport',
		'electricalTestReport',
		'finalInspectionReport',
		'testingBalancingReport',
		'qrCode',
	],
	reports: [
		'IncomingAlert',
		'CheckSheet',
		'DamageReport',
		'InProcessInspectionReport',
		'OldBearingReport',
		'NewBearingReport',
		'ElectricalTestReport',
		'FinalInspectionReport',
		'TestingAndBalancingReport',
	],
	IncomingAlert: [
		'orderId',
		'customerName',
		'isFirstTimeCustomer',
		'isPaymentOutstanding',
		'isCustomerInformedAboutOutstanding',
		'spindleDispatchOnlyAfterClearance',
		'whyDispatchWithoutClearance',
		'natureOfProblem',
		'spindleMake',
		'spindleModel',
		'taperSpecifications',
		'spindleMaxRPM',
		'spindleSerialNumber',
		'spindleReceivedDate',
		'spindleType',
		'salesApproval',
		'financeApproval',
	],
};

module.exports = allowedFields;
