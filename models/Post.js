const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  thumb: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  categories: {
    type: Array,
  },

}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
