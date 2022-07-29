const { Router } = require('express');
const newUserValidate = require('../middlewares/newUserValidation');
const userController = require('../controllers/userController');

const router = Router();
router.post('/', newUserValidate, userController.createUser);

module.exports = router;