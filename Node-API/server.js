
const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
var cors = require('cors');
// Getting our POSTS routes
// const posts = require('./routes/posts');
// app.use(express.static(path.join(dirname, 'dist')));
// app.use('/posts', posts);
// Catch all other routes request and return it to the index
app.use(cors());

app.get('/data', (req, res)=>{
    axios({
        method:'get',
        url: 'https://bio.torre.co/api/bios/dennissirley',
    })
    .then(function (response) {
        res.status(200).send(response.data)
    })
    .catch(function (error) {
        console.log(error);
    });

    // res.sendFile(path.join(dirname, 'dist/index.html'))
})

const port = process.env.PORT || 4600;

app.listen(port, (req, res)=>{
    console.log(`RUNNING on port ${port}`);
})