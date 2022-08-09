const { Router } = require('express');
const { tokenValidate } = require('../middlewares/validationToken');
const postController = require('../controllers/postController');
const newPostValidate = require('../middlewares/newPostValidation');

const router = Router();

router.use(tokenValidate);

router.post('/', newPostValidate, postController.createNewPost);

module.exports = router;