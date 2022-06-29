require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// schema
const user = require('./src/schema/users.js');

app.use(express.static('src'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
    if(err) {
        console.log(err)
    } else {
        console.log('mongoDB has connected...')
    }
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

app.post('/login', async function(req, res) {
    let result = await user.find(req.body);

    if(result) {
        return res.json(result);
    }
});

app.listen(port, function() {
    console.log('listening on...')
});