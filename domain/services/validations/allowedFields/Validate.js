const allowedFields = require('./allowedFields');

class Validate {
	constructor(fieldsObject) {
		this.fieldsObject = fieldsObject;
	}

	field(key, value) {
		let exists = this.fieldsObject[key].includes(value);
		if (!exists) {
			return false;
		}
		return true;
	}
}

let validate = new Validate(allowedFields);
module.exports = validate;
