const express = require('express');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(`${process.env.MONGO_URL}`).then(console.log('connected to mongodb')).catch( err => console.log(err));

const PORT = process.env.PORT || 5000
const app = express();



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
