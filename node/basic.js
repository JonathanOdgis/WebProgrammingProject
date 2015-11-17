var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('goodbye World from SUNY New Paltz');
}).listen(process.env.PORT);