const { CREATED } = require('../helpers/httpStatusCode');
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

module.exports = { createNewPost };