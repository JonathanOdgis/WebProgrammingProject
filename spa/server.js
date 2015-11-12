var http = require('http');    //This is CommonJS. There are three patterns CommonJS, requireJS (also known as APM), ExmaScript6 system)


http.createServer(function (req, res) {
    
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(req.url);
  
}).listen(process.env.PORT);