'use strict';
const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
    userId: {
      type: DataTypes.INTEGER,
      references: {model: 'Users', key: 'id'}
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE,
    }
  }, {timestamps: false, tableName:'BlogPosts'});

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      as: 'user',
    });
  }

  return BlogPost;
};

module.exports = BlogPost;