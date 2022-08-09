const { sign, verify } = require('jsonwebtoken');
require('dotenv/config');

const { JWT_SECRET } = process.env;

const createToken = (infoUser) => {
  console.log(infoUser);
  const token = sign(infoUser, JWT_SECRET, {
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