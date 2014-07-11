var models = require('../../models');
var question = models.question;

module.exports.show = function(req, res, next) {
	getQuestion = function(id, next) {
		question.find(id).success(function(thisQuestion) {
			next(id, thisQuestion.yes, thisQuestion.no, thisQuestion.question);
		});
	}

	renderQuestion = function(id, yes, no, question) {
		res.render('viewquestion', {id: id, yes: yes, no: no, question: question});
	}

	if(!!req.params.id) {
		console.log(req.params.id);
		getQuestion(req.params.id, renderQuestion);		
	}
	else {
		question.count().success(function(totalQuestions) {
			id = Math.floor((Math.random()*totalQuestions) + 1);
			getQuestion(id, renderQuestion);
		})
	}
};

module.exports.submit = function(req, res, next) {
	res.render('submit');
}

module.exports.handleSubmit = function(req, res, next) {
	console.log(req.body.question);
	id=0;
	res.redirect('/view/'+id);
}
