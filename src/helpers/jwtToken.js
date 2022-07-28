const { sign, verify } = require('jsonwebtoken');
require('dotenv/config');

const { JWT_SECRET } = process.env;

const createToken = (email) => {
  const token = sign({ email }, JWT_SECRET, {
    expiresIn: '1d',
    algorithm: 'HS256',
  }); 

  return token;
};

const validateToken = (token) => {
  const isValid = verify(token, process.env.JWT_SECRET);
  return isValid;
};

module.exports = { createToken, validateToken };