const { BAD_REQUEST } = require('../helpers/httpStatusCode');
const updatePostSchema = require('../schemas/updatePostSchema');

const updatePostValidate = (req, res, next) => {
  const { error } = updatePostSchema.validate(req.body);

  if (error) return res.status(BAD_REQUEST).json({ message: 'Some required fields are missing' });

  next();
};

module.exports = updatePostValidate;