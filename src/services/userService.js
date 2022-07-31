const { User } = require('../database/models');
const EditError = require('../helpers/editError');
const { CONFLICT, NOT_FOUND } = require('../helpers/httpStatusCode');
const { createToken } = require('../helpers/jwtToken');

const createUser = async (infoUser) => {
  const { displayName, email, password, image } = infoUser;

  const mailUser = await User.findOne({ where: { email } });

  if (mailUser) throw new EditError(CONFLICT, 'User already registered');

  await User.create({ displayName, email, password, image });

  const token = await createToken({ email, password });
  return token;
};

const getAllUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return allUsers;
};

const getUserById = async (id) => {
  const user = await User.findOne({ where: { id }, attributes: { exclude: ['password'] } });
  if (!user) throw new EditError(NOT_FOUND, 'User does not exist');
  return user;
};

module.exports = { createUser, getAllUsers, getUserById };