let buildMakeOrder = function (orderValidator) {
	return ({ sid } = {}) => {
		let { error } = orderValidator({
			sid,
		});
		if (error) {
			throw new Error(error);
		}

		return {
			getSid: () => sid,
			getIncomingAlertId: () => null,
			getCheckSheetId: () => null,
			getDamageReportId: () => null,
			getInProcessInspectionReportId: () => null,
			getOldBearingReportId: () => null,
			getNewBearingReportId: () => null,
			getElectricalTestReportId: () => null,
			getFinalInspectionReportId: () => null,
			getTestingAndBalancingReportId: () => null,
			getQrCodeUrl: () => null,
		};
	};
};

module.exports = buildMakeOrder;
