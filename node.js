var http = require('http');
var fs = require('fs');
var express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
const PORT = 8080;

fs.readFile('./html/login.html', function(err, html) {

    if (err) throw err;

    http.createServer(function(request, response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(PORT);
});