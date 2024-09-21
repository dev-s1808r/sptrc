const _serializeOne = (order) => {
	return {
		id: order._id,
		sid: order.sid,
		IncomingAlert: order.IncomingAlert,
		CheckSheet: order.CheckSheet,
		DamageReport: order.DamageReport,
		InProcessInspectionReport: order.InProcessInspectionReport,
		OldBearingReport: order.OldBearingReport,
		NewBearingReport: order.NewBearingReport,
		ElectricalTestReport: order.ElectricalTestReport,
		FinalInspectionReport: order.FinalInspectionReport,
		TestingAndBalancingReport: order.TestingAndBalancingReport,
		qrCode: order.qrCodeUrl,
	};
};

const serializer = (data) => {
	if (!data) {
		return null;
	}
	if (Array.isArray(data)) {
		return data.map(_serializeOne);
	} else {
		return _serializeOne(data);
	}
};

module.exports = serializer;
