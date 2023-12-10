const router = require('express').Router();
const {
  getAllPost, getPostById, addPost, deletePost, editPost,
} = require('../controller/postController');
const upload = require('../middleware/multer');

// GET ALL POST
router.get('/', getAllPost);

// GET POST by ID
router.get('/:id', getPostById);

// CREATE POST
router.post('/', upload.single('thumb'), addPost);

// DELETE POST
router.delete('/:id', deletePost);

// EDIT POST
router.put('/:id', editPost);

module.exports = router;
