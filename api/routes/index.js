'use strict';

let express = require('express'),
	apiRouter = express.Router(),
	moviesController = require('../controllers/moviesController');

apiRouter.route('/movies')
	.post(moviesController.create)
	.get(moviesController.findAll);

apiRouter.route('/movie/:movie_id')
	.get(moviesController.getById)
	.put(moviesController.updateById)
	.delete(moviesController.deleteById);

apiRouter.route('/movies/findByName/:movie_name')
	.get(moviesController.findByName);

module.exports = apiRouter;