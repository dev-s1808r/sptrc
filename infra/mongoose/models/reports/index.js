const CheckSheet = require('./CheckSheet');
const DamageReport = require('./Damage');
const ElectricalTestReport = require('./ElectricalTest');
const FinalInspectionReport = require('./FinalInspection');
const IncomingAlert = require('./IncomingAlert');
const InProcessInspectionReport = require('./InspectionReport');
const NewBearingReport = require('./NewBearing');
const OldBearingReport = require('./OldBearing');
const TestingAndBalancingReport = require('./TestingBalancing');

module.exports = {
	IncomingAlert,
	CheckSheet,
	DamageReport,
	InProcessInspectionReport,
	OldBearingReport,
	NewBearingReport,
	ElectricalTestReport,
	FinalInspectionReport,
	TestingAndBalancingReport,
};
