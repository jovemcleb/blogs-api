"use strict";

const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { 
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER, 
      primaryKey: true},
    name: {type: DataTypes.STRING},
  }, {
    tableName: 'Categories',
    timestamps: false,
  });

  return Category;
}

module.exports = Category;