const validate = require('../allowedFields/Validate');

function hasReport(reportName) {
	if (!validate.field('reports', reportName)) {
		return false;
	}
	return true;
}

module.exports = hasReport;
