require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('src'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if(err) {
        console.log(err)
    } else {
        console.log('mongoDB has connected...')
    }
})

app.listen(port, function() {
    console.log('listening on...')
});