const express = require('express');

const app = express();

// access environment variable
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();

// connect to database
require('./config/database');

// middleware
app.use(express.json());

// routes
const postRouter = require('./routes/posts');

// call port from env
const PORT = process.env.PORT || 5000;

// routes middleware
app.use('/api/articles', postRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
