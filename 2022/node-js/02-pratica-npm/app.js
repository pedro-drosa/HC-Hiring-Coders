const http = require("http");
const queryString = require("query-string");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  const params = queryString.parse(url.parse(req.url, true).search);
  let response;
  if (params.question == "melhor-filme") {
    response = "Star Wars";
  } else if (params.question == "melhor-tecnologia") {
    response = "Node";
  } else {
    response = "Não sei, desculpe :(";
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end(`${params.question}? ${response}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
