const { Router } = require('express');
const newUserValidate = require('../middlewares/newUserValidation');
const userController = require('../controllers/userController');
const { tokenValidate } = require('../middlewares/validationToken'); 

const router = Router();
router.post('/', newUserValidate, userController.createUser);
router.get('/', tokenValidate, userController.getAllUsers);
router.get('/:id', tokenValidate, userController.getUserById);
router.delete('/me', tokenValidate, userController.deleteUserById);
module.exports = router;