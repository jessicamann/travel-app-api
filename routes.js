const express = require('express');
const controller = require('./controller');

module.exports = function(app) {
	const routes = express.Router();

	routes.get('/', (request, response) => {
		response.status(200);
	});
	routes.get('/api', (request, response) => {
		response.status(200).json({message: 'Connected!'});
	});

	app.use('/', routes);
}
