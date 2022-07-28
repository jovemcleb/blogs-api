const loginService = require('../services/loginService');

const singIn = async (req, res) => {
  const token = await loginService.validateCredentials(req.body);

  return res.status(200).json({ token });
};

module.exports = { singIn };
