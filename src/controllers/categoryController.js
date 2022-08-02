const { CREATED } = require('../helpers/httpStatusCode');
const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body; 
    const addCategory = await categoryService.createCategory(name);
    return res.status(CREATED).json(addCategory);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { createCategory }; 