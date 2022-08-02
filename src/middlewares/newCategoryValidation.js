const { BAD_REQUEST } = require('../helpers/httpStatusCode');
const categorySchema = require('../schemas/newCategory');

const newCategoryValidate = (req, res, next) => {
  const { error } = categorySchema.validate(req.body);
  if (error) return res.status(BAD_REQUEST).json({ message: error.message });
  next();
};
module.exports = newCategoryValidate;