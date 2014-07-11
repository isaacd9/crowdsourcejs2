var Sequelize = require('sequelize')

var sequelize = new Sequelize('crowdsource', 'root', 'nodeisfun', {dialect: "mysql",port: 3306});

sequelize.authenticate().complete(function(error) {
		if (!!error) {
			throw error;
		}
});
	
module.exports["question"] = sequelize.import(__dirname + '/question');
	
module.exports.sequelize = sequelize;
