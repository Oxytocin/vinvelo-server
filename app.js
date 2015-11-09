var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('It works\n!');
});

server.listen(80);