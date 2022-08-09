const { User } = require('../database/models');
const passwordService = require('../helpers/password');
const jwtService = require('../helpers/jwtToken');
const EditError = require('../helpers/editError');
const { BAD_REQUEST } = require('../helpers/httpStatusCode');

const validateCredentials = async ({ email, password }) => {
  const user = await User.findOne({ where: { email }, raw: true });

  if (!user) throw new EditError(BAD_REQUEST, 'Invalid fields');

  const matchPassword = passwordService.checkPassword(password, user.password);

  if (!matchPassword) throw new EditError(BAD_REQUEST, 'Invalid password');

  return jwtService.createToken({ id: user.id, email, password });
};

module.exports = { validateCredentials }; 