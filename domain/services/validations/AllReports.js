const allowedFields = require('./allowedFields/allowedFields');

class AllReports {
	constructor(allowed) {
		this.allowed = allowed;
	}

	get() {
		return this.allowed.reports;
	}
}

let allReports = new AllReports(allowedFields);
module.exports = allReports;
