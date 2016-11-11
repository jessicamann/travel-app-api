const express = require('express');
const controller = require('./controller');

module.exports = function(app) {
	const routes = express.Router();

	routes.get('/api', (request, response) => {
		response.status(200).json({message: 'Connected!'});
	});

	app.use('/', routes);
}
