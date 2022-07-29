const { BAD_REQUEST } = require('../helpers/httpStatusCode');
const newUserSchema = require('../schemas/newUserSchema');

const newUserValidate = (req, res, next) => {
  const { error } = newUserSchema.validate(req.body);
  if (error) return res.status(BAD_REQUEST).json({ message: error.message });
  next();
};

module.exports = newUserValidate;