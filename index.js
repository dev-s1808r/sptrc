console.clear();

const config = require('./config');
const app = require('./interfaceAdapters/express/app');

app.listen(config.app.port, () => {
	console.log(
		`the application is running on http://localhost:${config.app.port}`
	);
});
