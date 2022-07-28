const { Router } = require('express');

const router = Router();
const loginController = require('../controllers/loginController');
const validationLogin = require('../middlewares/index');

router.post('/', validationLogin, loginController.singIn);

module.exports = router;
