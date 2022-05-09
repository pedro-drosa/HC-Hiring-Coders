const { stdin, stdout } = require("process");
const readLine = require("readline");

const terminal = readLine.createInterface({ input: stdin, output: stdout });

function variables() {
  terminal.question("Digite um número inteiro: ", (number1) =>
    terminal.question("Digite um número real: ", (number2) => {
      terminal.question("Digite um texto: ", (text1) => {
        console.log(
          `Você digitou os seguintes valores:\nInteiro: ${number1}\nReal: ${number2}\nTexto: ${text1}`
        );
        terminal.close();
      });
    })
  );
}

variables();
