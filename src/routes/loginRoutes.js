const { Router } = require('express');
const loginController = require('../controllers/loginController');
const validationLogin = require('../middlewares/loginValidate');

const router = Router();

router.post('/', validationLogin, loginController.singIn);

module.exports = router;
