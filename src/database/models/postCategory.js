const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {type: DataTypes.INTEGER, foreignKey: true},
    categoryId: {type: DataTypes.INTEGER, foreignKey: true},
  },{
    tableName: 'PostCategories',
    timestamps: false,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
      as: 'blogPosts',
      otherKey: 'postId',
      through: PostCategory,
    });
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId',
      as: 'categories',
      otherKey: 'categoryId',
      through: PostCategory,
    });
  }

  return PostCategory;
};

module.exports = PostCategory;