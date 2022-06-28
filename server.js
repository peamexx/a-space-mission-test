const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('src'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(port, function() {
    console.log('listening on...')
});