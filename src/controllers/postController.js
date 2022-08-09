const { CREATED, OK } = require('../helpers/httpStatusCode');
const postService = require('../services/postService');

const createNewPost = async (req, response) => {
  const { title, content, categoryIds } = req.body;
  try {
    const newPost = await postService.createNewPost(title, content, categoryIds, req.user);
    if (newPost.error) return response.status(newPost.status).json({ message: newPost.message });
    return response.status(CREATED).json(newPost);
  } catch (error) {
    return response.status(error.status).json({ message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  const allPosts = await postService.getAllPosts();
  return res.status(OK).json(allPosts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const postById = await postService.getPostById(id);

  return res.status(OK).json(postById);
};

module.exports = { createNewPost, getAllPosts, getPostById };