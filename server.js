var express = require('express');
var app = express();

var PORT = 3000;

var middleware = require('./middleware.js');

// order is important global middleware first
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication,
	function(req, res) {
		res.send("About Us!");
	}
);

app.use(express.static(__dirname + "/public"));

app.listen(PORT,
	function() {
		console.log("Server is up and running on port: " + PORT);
		console.log("Public documents at: " + __dirname);
	}
);