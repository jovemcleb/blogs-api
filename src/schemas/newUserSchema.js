const Joi = require('joi');

const newUserSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.max': '"displayName" length must be at least 8 characters long"',
    'any.required': 'displayName is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': '"email" must be a valid email',
    'any.required': 'email is required',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be at least 6 characters long',
    'any.required': 'password is required',
  }),
  image: Joi.string().optional(),
});

module.exports = newUserSchema;