const Joi = require('joi');

const newPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number().min(1)),
});

module.exports = newPostSchema;