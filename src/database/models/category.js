const sequelize = require("sequelize");

const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    name: {type: DataTypes.STRING},
  }, {
    tableName: 'Category',
    timestamps: false,
  });

  return Category;
}

module.exports = Category;