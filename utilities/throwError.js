function throwError(error, message, logger = null) {
	console.log(`An error occurred while ${message}`);
	console.log(error.message);
	let e = `An error occurred while ${message} \n Error: ${error.message}`;
	if (logger) {
		logger(e);
	}
	throw new Error(e);
}

module.exports = throwError;
