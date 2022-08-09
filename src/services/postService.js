const Sequelize = require('sequelize');
const { BlogPost, Category, PostCategory, User } = require('../database/models');
const config = require('../database/config/config');
const EditError = require('../helpers/editError');
const { BAD_REQUEST } = require('../helpers/httpStatusCode');

const sequelize = new Sequelize(config.development);

const customObject = (obj) => ({
  id: obj.id,
  title: obj.title,
  content: obj.content,
  userId: obj.userId,
  updated: obj.updated,
  published: obj.published,
});

const createNewPost = async (title, content, categoryIds, { email }) => {
  const t = await sequelize.transaction();
  try {
    const { id } = await User.findOne({ where: { email } });
    const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });
    if (count !== categoryIds.length) throw new EditError(BAD_REQUEST, '"categoryIds" not found');
    const post = await BlogPost.create(
      { title, content, userId: id, published: new Date(), updated: new Date() },
      { transaction: t },
      );
    await Promise.all(categoryIds.map(
        (item) => PostCategory.create({ postId: post.id, categoryId: item }, { transaction: t }),
      ));
    await t.commit();
    // console.log(customObject(post));
    return customObject(post);
  } catch (e) {
    await t.rollback(); return e;
  }
};

module.exports = { createNewPost };