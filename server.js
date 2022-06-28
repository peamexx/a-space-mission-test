const express = require('express');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
    res.send('안녕하세요')
});

app.listen(port, function() {
    console.log('listening on...')
});