const { CREATED, OK } = require('../helpers/httpStatusCode');
const userService = require('../services/userService');

const createUser = async (req, res) => {
  const token = await userService.createUser(req.body);

  return res.status(CREATED).json({ token });
};

const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  return res.status(OK).json(users);
};
module.exports = { createUser, getAllUsers };