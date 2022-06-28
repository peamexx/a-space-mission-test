require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// let database = undefined;
const User = require('./src/schema/user.js');

app.use(express.static('src'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
    if(err) {
        console.log(err)
    } else {
        console.log('mongoDB has connected...')
        // database = db;
    }
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

app.post('/login', async function(req, res) {
    console.log(req.body);

    let result = await User.find({ userName: 'efwef'});
    if(result) {
        console.log('왓니...')
        console.log(result);
        return res.json();
    }
    // let result = await User(req.body).save();
    // if(result) {
    //     console.log('왓니...')
    //     console.log(result);
    //     return res;
    // }    
});

app.listen(port, function() {
    console.log('listening on...')
});