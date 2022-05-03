// Inclui uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');

// Define o endereço / URL
const hostname = '127.0.0.1'; //localhost
const port = 5000;//porta

//Regra da aplicação
const server = http.createServer((req, res) => {

  //Pegar uma pergunta na url
  const params = queryString.parse(url.parse(req.url, true).search);
  
  //Verificar a pergunta e escolher uma resposta
  let answer;

  if(params.question === 'melhor-filme') {
    answer = 'star wars';
  } else if(params.question === 'melhor-tecnologia-backend') {
    answer = 'NodeJS'; 
  } else {
    answer = 'não sei, foi mau :(';
  }
  // Retornar a resposta escolhida

  res.statusCode = 200;//código http
  res.setHeader('Content-Type', 'text/plain');//header
  res.end(answer);//retorno
});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
