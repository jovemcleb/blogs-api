const { CREATED, OK, NO_CONTENT } = require('../helpers/httpStatusCode');
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

const updatePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const contentUpdate = req.body;
    const userId = req.user;
    const updatedPost = await postService.updatePostById(id, contentUpdate, userId);
    return res.status(OK).json(updatedPost);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

const deletePostById = async (req, res) => {
  const { id } = req.params;
  const idUser = req.user;
  await postService.deletePostById(id, idUser);
  return res.status(NO_CONTENT).end();
};
module.exports = { createNewPost, getAllPosts, getPostById, updatePostById, deletePostById };