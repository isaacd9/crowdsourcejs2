var Sequelize = require('sequelize'),
	sequelize = new Sequelize('crowdsource', 'root', 'nodeisfun', {
		dialect: "mysql",
		port: 3306,
	});

var question = sequelize.import('./question.js');

sequelize.sync().success(function() {
		console.log("Worked!");
	}).error(function(error) {
		throw error;
	});
