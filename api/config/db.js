//MongoDB connection

'use strict';

let mongoose = require('mongoose'),
	dbURI = 'mongodb://localhost/test';

//open conection
mongoose.connect(dbURI);

//load models
require('../models/movieModel');