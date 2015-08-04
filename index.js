var express = require('express');
var path = require('path');

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {
        root: path.join(__dirname, 'views')
    });
});

app.get('/shop', function(req, res) {
    res.sendFile('shop.html', {
        root: path.join(__dirname, 'views')
    });
});

app.listen(8080);
