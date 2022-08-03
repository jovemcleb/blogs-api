const { Router } = require('express');
const { tokenValidate } = require('../middlewares/validationToken');
const categoryController = require('../controllers/categoryController');
const newCategoryValidate = require('../middlewares/newCategoryValidation');

const router = Router();

router.post('/', tokenValidate, newCategoryValidate, categoryController.createCategory);

router.get('/', tokenValidate, categoryController.getAllCategories);

module.exports = router;