const mongoose = require('mongoose');
const { mongodb } = require('../../config');

const mongooseConnect = async () => {
	const connectDb = () => {
		let dbUrl = `${mongodb.dbUrl}${mongodb.dbName}`;
		console.log('initiating db connection on ', dbUrl);
		mongoose
			.connect(dbUrl)
			.then(() => {
				console.log('🚀 Connection to MongoDB successful...');
			})
			.catch((err) => console.log('something went wrong: ', err.message, '\n'));
	};
	await connectDb();
};

module.exports = mongooseConnect;
