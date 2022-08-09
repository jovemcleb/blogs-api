const { Router } = require('express');
const { tokenValidate } = require('../middlewares/validationToken');
const postController = require('../controllers/postController');
const newPostValidate = require('../middlewares/newPostValidation');

const router = Router();

router.post('/', newPostValidate, tokenValidate, postController.createNewPost);
router.get('/:id', tokenValidate, postController.getPostById);
router.get('/', tokenValidate, postController.getAllPosts);

module.exports = router;