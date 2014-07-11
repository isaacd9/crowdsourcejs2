module.exports = function(sequelize, DataTypes) {
	return sequelize.define("question", {
		question: DataTypes.TEXT,
		yes: DataTypes.INTEGER,
		no: DataTypes.INTEGER,
	});
};
