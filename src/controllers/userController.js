const { CREATED, OK, NO_CONTENT } = require('../helpers/httpStatusCode');
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

const deleteUserById = async (req, res) => {
  const idUser = req.user;
  await userService.deleteUserById(idUser);
  return res.status(NO_CONTENT).end(); 
};

module.exports = { createUser, getAllUsers, getUserById, deleteUserById };