const { UNAUTHORIZED } = require('../helpers/httpStatusCode');
const { validateToken } = require('../helpers/jwtToken');

const tokenValidate = (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) {
    return res.status(UNAUTHORIZED).json({ message: 'Token not found' });
  }
  
  try {
    const { id } = validateToken(authorization);
    req.user = id;
  } catch (error) {
    return res.status(UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
  
  next();
};

module.exports = { tokenValidate };