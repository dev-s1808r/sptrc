console.clear();

const config = require('./config');
const app = require('./interfaceAdapters/express/app');
const connectDb = require('./infra/mongoose/connection');

connectDb();
app.listen(config.app.port, () => {
	console.log(
		`the application is running on http://localhost:${config.app.port}`
	);
});
