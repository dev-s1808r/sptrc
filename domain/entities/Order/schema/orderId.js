let buildMakeOrderId = function (orderValidator) {
	return ({ id } = {}) => {
		let { error } = orderValidator({
			id,
		});
		if (error) {
			throw new Error(error);
		}

		return {
			getId: () => id,
		};
	};
};

module.exports = buildMakeOrderId;
