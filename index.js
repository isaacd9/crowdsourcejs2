var express = require('express');
var mustacheExpress = require('mustache-express');

var controllers = require('./controllers');

var app = express();

app.engine('html.mst', mustacheExpress());
app.set('view engine', 'html.mst');
app.set('views', __dirname + '/views');

app.use("/public", express.static(__dirname + '/public'));

app.route('/').get(controllers.questions.show);		


var port = 8000;
app.listen(port);
console.log("starting server on port " + port);
