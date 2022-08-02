const { Category } = require('../database/models');

const createCategory = async (nameCategory) => {
  console.log(nameCategory);
  // const currentCategory = await Category.findOne({ where: { nameCategory } });
  // console.log(currentCategory);

  // if (currentCategory) throw new Error('Category already exists');
  const newCategory = await Category.create({ name: nameCategory });

  console.log(newCategory);

  return newCategory;
};

module.exports = { createCategory };