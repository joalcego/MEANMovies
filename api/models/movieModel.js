//movie model

'use strict'

//create mongoose object
let mongoose = require('mongoose');

//create movie schema
let movieSchema = new mongoose.Schema({
	name: String,
	duration: Number,
	type: Number,
	adultsOnly: Boolean
});

//register model in mongoose
mongoose.model('Movie', movieSchema);