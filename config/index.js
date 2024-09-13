require('dotenv').config();

module.exports = {
	app: {
		port: process.env.PORT,
	},
	mongodb: {
		dbName: process.env.DB_NAME,
		dbUrl: process.env.DB_URL,
	},
};
