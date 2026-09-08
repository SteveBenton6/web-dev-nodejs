// JavaScript Comment Format

const http = require("http");

function handleRequest(request, response) {
  response.statusCode = 200;
  response.end("<h1>Hello World! - from my server!</h1>");
}

const server = http.createServer(handleRequest);

server.listen(3000);
