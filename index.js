const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config()
const authRoute = require('./routes/auth')
const postsRoute = require('./routes/posts')
var cors = require('cors');

var app = express();

// Then use it before your routes are set up:
app.use(cors());

const port = process.env.PORT || 5000

app.use(express.json())

mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.use('/api/auth', authRoute)
app.use('/api/posts', postsRoute)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})