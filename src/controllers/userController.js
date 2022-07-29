const { CREATED } = require('../helpers/httpStatusCode');
const userService = require('../services/userService');

const createUser = async (req, res) => {
  const token = await userService.createUser(req.body);

  return res.status(CREATED).json({ token });
};

module.exports = { createUser };