'use strict'

let mongoose = require('mongoose'),
	Movie = mongoose.model('Movie');

module.exports.findAll = function(req, res){
	Movie.find((err, movies) => {
		if(err) res.send(err);

		res.json(movies);
	});
};

module.exports.getById = function(req,res){
	let id = req.params.movie_id;

	Movie.findById(id, (err, movie) => {
		if(err) res.send(err);

		res.json(movie);
	});
};

module.exports.findByName = function(req, res){
	let name = req.params.movie_name;
	console.log(req.params);
	Movie.find({'name':new RegExp(name,'i')}, (err, movies) => {
		if(err) res.send(err);

		res.json(movies);
	});
};

module.exports.create = function(req, res){
	let newMovie = new Movie();
	newMovie.name = req.body.name;
	newMovie.duration = req.body.duration;
	newMovie.type = req.body.type;
	newMovie.adultsOnly = req.body.adultsOnly;

	newMovie.save(err => {
		if(err) res.send(err);

		res.json({message: 'Movie saved successfully!'});
	});
};

module.exports.updateById = function(req, res){
	let id = req.params.movie_id;
	Movie.findById(id, (err, movie) => {
		if(err) res.send(err);

		movie.name = req.body.name;
		movie.duration = req.body.duration;
		movie.type = req.body.type;
		movie.adultsOnly = req.body.adultsOnly;

		movie.save(err => {
			if(err) res.send(err);

			res.json({message: 'Movie updated successfully!'});
		})
	});
};

module.exports.deleteById = function(req,res){
	let id = req.params.movie_id;

	Movie.remove({ _id:id }, err => {
		if(err) res.send(err);

		res.json({ message: 'Movie deleted successfully!' });
	});
};