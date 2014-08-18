'use strict';

var http = require('http');
var express = require('express');

var app = express();
var server = http.createServer(app);

app.use(express.static(__dirname + '/../dist'));

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), function() {
    console.log('Listening on port: %d', app.get('port'));
});