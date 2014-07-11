var express = require('express');
var mustacheExpress = require('mustache-express');
var bodyParser = require('body-parser');

var controllers = require('./controllers');

var app = express();

app.engine('html.mst', mustacheExpress());
app.set('view engine', 'html.mst');
app.set('views', __dirname + '/views');

app.use("/public", express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.route('/').get(controllers.questions.show);		
app.route('view/').get(controllers.questions.show);
app.route('/view/:id').get(controllers.questions.show);

app.route('/submit').get(controllers.questions.submit);
app.route('/submit').post(controllers.questions.handleSubmit);

var port = 8000;
app.listen(port);
console.log("starting server on port " + port);
