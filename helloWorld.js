require('http').createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("Hello World!\n");
}).listen(1234, "127.0.0.1");
console.log("Server listening on http://127.0.0.1:1234");