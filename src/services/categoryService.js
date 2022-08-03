const { Category } = require('../database/models');
const EditError = require('../helpers/editError');
const { NOT_FOUND } = require('../helpers/httpStatusCode');

const createCategory = async (nameCategory) => {
  console.log(nameCategory);
  const currentCategory = await Category.findOne({ where: { name: nameCategory } }); 
  console.log(currentCategory);

  if (currentCategory) throw new Error('Category already exists');
  const newCategory = await Category.create({ name: nameCategory });

  console.log(newCategory);

  return newCategory;
};

const getAllCategories = async () => {
  const allCategories = await Category.findAll();

  if (!allCategories) throw new EditError(NOT_FOUND, 'Categories not found');

  return allCategories;
};

module.exports = { createCategory, getAllCategories };