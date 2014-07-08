var express = require('express');
var app = express();

app.get('/', function(req, res) {
	console.log("A request!");
	res.send("lol");
});

app.listen(8000);
