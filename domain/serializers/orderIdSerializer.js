const _serializeOne = (data) => {
	return {
		id: data._id,
	};
};

const idSerializer = (data) => {
	if (!data) {
		return null;
	}
	if (Array.isArray(data)) {
		return data.map(_serializeOne);
	} else {
		return _serializeOne(data);
	}
};

module.exports = idSerializer;
