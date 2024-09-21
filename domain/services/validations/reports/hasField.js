const validate = require('../allowedFields/Validate');

function hasField(reportName, field) {
	if (!validate.field(reportName, field)) {
		return false;
	}
	return true;
}

module.exports = hasField;
