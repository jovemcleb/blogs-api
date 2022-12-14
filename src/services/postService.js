const Sequelize = require('sequelize');
const { BlogPost, Category, PostCategory, User } = require('../database/models');
const config = require('../database/config/config');
const EditError = require('../helpers/editError');
const { NOT_FOUND, BAD_REQUEST, UNAUTHORIZED } = require('../helpers/httpStatusCode');

const sequelize = new Sequelize(config.development);

const customObject = (obj) => ({
  id: obj.id,
  title: obj.title,
  content: obj.content,
  userId: obj.userId,
  updated: obj.updated,
  published: obj.published,
});

const createNewPost = async (title, content, categoryIds, id) => {
  const t = await sequelize.transaction();
  try {
    const { count } = await Category.findAndCountAll({ where: { id: categoryIds } });
    if (count !== categoryIds.length || count === 0) {
      return { error: true, status: BAD_REQUEST, message: '"categoryIds" not found' };
    }
    const post = await BlogPost.create(
      { title, content, userId: id, published: new Date(), updated: new Date() },
      { transaction: t },
    );
    await Promise.all(categoryIds.map(
      (item) => PostCategory.create({ postId: post.id, categoryId: item }, { transaction: t }),
    ));
    await t.commit();
    return customObject(post);
  } catch (e) {
    await t.rollback(); return e;
  }
};

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User,
        as: 'user',
        attributes: {
          exclude: ['password'],
        },
      },
      {
        model: Category,
        as: 'categories',
        through: {
          attributes: [],
        },
      },
    ],
  });
  return allPosts;
};

const getPostById = async (id) => {
  console.log(id);
  const postById = await BlogPost.findOne(
    { 
      where: { id }, 
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ], 
    },
  );

  if (!postById) throw new EditError(NOT_FOUND, 'Post does not exist');
  
  return postById;
};

const updatePostById = async (idParam, contentUpdate, idUser) => {
  const post = await BlogPost.findOne({ where: { id: idParam } });

  const userIsValid = idUser === post.id;
  if (!userIsValid) throw new EditError(UNAUTHORIZED, 'Unauthorized user');
  await BlogPost.update({ ...contentUpdate, update: new Date() }, { where: { id: idParam } });
  
  const updatedPost = await BlogPost.findOne({ where: { id: idParam },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ], 
  }); 

  return updatedPost;
};

const deletePostById = async (idPost, idUser) => {
  console.log(idPost, idUser);
  const post = await BlogPost.findOne({ where: { id: idPost } });
  
  if (!post) throw new EditError(NOT_FOUND, 'Post does not exist');

  const userIsValid = idUser === post.userId;

  if (!userIsValid) throw new EditError(UNAUTHORIZED, 'Unauthorized user');
  
  await BlogPost.destroy({ where: { id: idPost } });
};

module.exports = { createNewPost, getAllPosts, getPostById, updatePostById, deletePostById };