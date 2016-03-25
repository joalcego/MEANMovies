
'use strict';

let express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	port = process.env.PORT || 8080;


// Database
require('./api/config/db');

// Middleware 
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

// Log example for every request
app.use(function(req, res, next){
	console.log('Time:', Date.now());

	//continue with application execution
	next();
});

// other example
app.use((req, res, next) => {
	console.log('Time:', Date.now());

	//continue with application execution
	next();
});

// Routes
let apiRouter = require('./api/routes/index');

// Set routes to api
app.use('/api', apiRouter);

// Start server
app.listen(port);
console.log('App running on port: ' + port);