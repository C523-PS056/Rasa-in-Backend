const router = require('express').Router();
const Post = require('../models/Post');

// GET ALL POST
router.get('/', async (req, res) => {
  const username = req.query.user;
  const category = req.query.cat;
  try {
    let post;
    if (username) {
      const regex = new RegExp(`${username}`, 'i', 'g');
      post = await Post.find({ username: { $regex: regex } });
    } else if (category) {
      post = await Post.find({
        categories: {
          $in: [category],
        },
      });
    } else {
      post = await Post.find().sort({ createdAt: 'desc' });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Post tidak ditemukan' });
  }
});

// GET POST by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) res.json({ message: 'Post tidak ditemukan' });
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// CREATE POST
router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({ message: 'Gagal Membuat Post' });
  }
});

// DELETE POST
router.delete('/:id', async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Berhasil menghapus post' });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus post' });
  }
});

// EDIT POST
router.put('/:id', async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    }, { new: true });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: 'Gagal Mengedit post' });
  }
});

module.exports = router;
