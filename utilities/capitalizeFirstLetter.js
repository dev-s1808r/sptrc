function capitalizeFirstLetter(string) {
	if (!string) {
		throw new Error(
			`something went wrong while capitalizing. String is missing`
		);
	}
	return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = capitalizeFirstLetter;
