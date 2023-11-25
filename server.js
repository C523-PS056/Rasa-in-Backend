const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const postRouter = require('./routes/posts'); 
const PORT = process.env.PORT || 5000
const app = express();

app.use(express.json())

mongoose.connect(`${process.env.MONGO_URL}`).then(console.log('connected to mongodb')).catch( err => console.log(err));


app.use('/api/articles', postRouter)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
