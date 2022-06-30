require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const port = process.env.PORT || 3000;

// schema
const user = require('./src/schema/users.js');
const line = require('./src/schema/lines.js');

// set use
app.use(express.static('src'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// connect DB
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if(err) {
        console.log(err)
    } else {
        console.log('mongoDB has connected...')
    }
});

// set router
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

app.post('/login', async function(req, res) {
    let foundUser = await user.findOne({ id: req.body.id });

    if(foundUser == null) {
        res.status(500).json({ msg: 'no user exists', data: null });
    } else {
        let comparedUser = await bcrypt.compare(req.body.password, foundUser.password);

        if(!comparedUser) {
            res.status(500).json({ msg: 'not allowed', data: null })
        } else {
            res.status(200).json({ msg: 'login success', data: req.body.id });
        };
    }
});

app.post('/register', async function(req, res) {
    let chkSameUser = await user.findOne({ id: req.body.id });

    if(chkSameUser != null) {
        res.status(409).json({ msg: 'user exists already', data: null });
    } else {
        let result = await new user(req.body).save();
        
        if(result) {
            res.status(200).json({ msg: 'register success', data: req.body.id });
        }
    }
});

app.post('/chapter', async function(req, res) {
    let chapterData = await line.findOne(req.body); //hhj애초에 다받아오는거루 해야하나? 

    if(chapterData == null) {
        res.status(500).json({ msg: 'no data exists', data: null });
    } else {
        console.log(chapterData.chapter)
        res.status(200).send({ msg: 'line data success', data: chapterData }); //hhj특정한것만 받아올수없나 체크
    };
});

// listen
app.listen(port, function() {
    console.log('listening on...')
});