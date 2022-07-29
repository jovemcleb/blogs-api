const EditError = require('../helpers/editError');

const validationLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) throw new EditError(400, 'Some required fields are missing');
  next();
};

module.exports = validationLogin;