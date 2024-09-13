const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	console.log('the application is running');
	res.status(200).send('hello there');
});

module.exports = app;
