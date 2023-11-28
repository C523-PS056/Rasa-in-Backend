const express = require('express');
// eslint-disable-next-line no-unused-vars
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const postRouter = require('./routes/posts');
const catRouter = require('./routes/categories');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

mongoose.connect(`${process.env.MONGO_URL}`).then(console.log('connected to mongodb')).catch((err) => console.log(err));

app.use('/api/articles', postRouter);
app.use('/api/categories', catRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
