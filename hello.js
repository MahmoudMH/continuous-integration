var http = require('http');
http.createServer(function(request,response){
  response.writeHead(200,{'Contant-Type' : 'text/plain'});
  response.end('Hello Travis!')
}).listen(1337,'127.0.0.1');
console.log('Server Running at http://127.0.0.1:1337/');
