var express = require('express');
var app = express();
const path = require('path');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/html/index.html'));
});

app.get('/js/index', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/js/index.js'));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});