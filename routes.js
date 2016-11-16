const express = require('express');
const controller = require('./controller');

module.exports = function(app) {
	const routes = express.Router();

	routes.get('/api', (request, response) => {
		response.status(200).json({message: 'Connected!'});
	});

	routes.get('/places', controller.getAllPlaces);
	routes.post('/add', controller.addAPlace);
	routes.post('/delete', controller.deleteAPlace);

	app.use('/', routes);
}
