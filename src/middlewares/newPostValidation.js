const { BAD_REQUEST } = require('../helpers/httpStatusCode');
const newPostSchema = require('../schemas/newPostSchema');

const newPostValidate = (req, res, next) => {
  const { error } = newPostSchema.validate(req.body);
  if (error) return res.status(BAD_REQUEST).json({ message: 'Some required fields are missing' });
  next();
};

module.exports = newPostValidate;