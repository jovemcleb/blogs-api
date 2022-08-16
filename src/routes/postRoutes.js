const { Router } = require('express');
const { tokenValidate } = require('../middlewares/validationToken');
const postController = require('../controllers/postController');
const newPostValidate = require('../middlewares/newPostValidation');
const updatePostValidate = require('../middlewares/updatePostValidation');

const router = Router();

router.post('/', newPostValidate, tokenValidate, postController.createNewPost);
router.get('/:id', tokenValidate, postController.getPostById);
router.get('/', tokenValidate, postController.getAllPosts);
router.put('/:id', updatePostValidate, tokenValidate, postController.updatePostById);

module.exports = router;