const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('안녕하세요')
});

app.listen(3000, function() {
    console.log('listening on...')
});