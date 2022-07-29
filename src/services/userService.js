const { User } = require('../database/models');
const EditError = require('../helpers/editError');
const { CONFLICT } = require('../helpers/httpStatusCode');
const { createToken } = require('../helpers/jwtToken');

const createUser = async (infoUser) => {
  const { displayName, email, password, image } = infoUser;

  const mailUser = await User.findOne({ where: { email } });

  if (mailUser) throw new EditError(CONFLICT, 'User already registered');

  await User.create({ displayName, email, password, image });

  const token = await createToken({ email, password });
  return token;
};

module.exports = { createUser };