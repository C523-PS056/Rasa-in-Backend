const router = require('express').Router();
const {
  getAllPost, getPostById, addPost, deletePost, editPost,
} = require('../controller/postController');

// GET ALL POST
router.get('/', getAllPost);

// GET POST by ID
router.get('/:id', getPostById);

// CREATE POST
router.post('/', addPost);

// DELETE POST
router.delete('/:id', deletePost);

// EDIT POST
router.put('/:id', editPost);

module.exports = router;
