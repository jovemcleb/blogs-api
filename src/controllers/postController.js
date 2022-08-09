const { CREATED } = require('../helpers/httpStatusCode');
const postService = require('../services/postService');

const createNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { email } = req.user;
  try {
    const addPost = await postService.createNewPost(title, content, categoryIds, email);
    console.log(addPost);
    return res.status(CREATED).json(addPost);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = { createNewPost };