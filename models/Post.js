const mongoose = require('mongoose');

const { marked } = require('marked');
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const dompurify = createDomPurify(new JSDOM().window);

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
  sanitizedHtml: {
    type: String,
  },

}, { timestamps: true });

PostSchema.pre('validate', function (next) {
  if (this.content) {
    this.sanitizedHtml = dompurify.sanitize(marked(this.content));
  }
  next();
});

module.exports = mongoose.model('Post', PostSchema);
