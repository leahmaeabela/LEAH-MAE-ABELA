var http = require('http');
var app = require('./app');

http.createServer(app.handleRequest).listen(3000, function() {
 
});