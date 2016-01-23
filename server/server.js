var express = require('express');
var app = express();
var http = require('http');
var port = process.env.PORT || 8000;
var routes = require('./routes.js');
app.use('/', express.static(__dirname + '/../public'));
app.use('/', routes);

app.listen(port, function() {
  console.log('http://localhost:' + port);
});

module.exports = app;
