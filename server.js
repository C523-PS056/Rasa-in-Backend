const express = require('express');
const cors = require('cors');

const app = express();

// access environment variable
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();

// connect to database
require('./config/database');

// middleware
app.use(cors());
app.use(express.json());

// routes
const postRouter = require('./routes/posts');

// call port from env
const PORT = process.env.PORT || 5000;

// routes middleware
app.use('/api/articles', postRouter);

app.get('/', (req, res) => {
  res.send({
    greet: 'Hello there 👋',
    message: 'visit link on bellow for documentation about Rasain 👇',
    documentation: 'https://github.com/C523-PS056/Rasa-in-Backend',
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
