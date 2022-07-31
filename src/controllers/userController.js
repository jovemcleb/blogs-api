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

const getUserById = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  return res.status(OK).json(user);
};
module.exports = { createUser, getAllUsers, getUserById };