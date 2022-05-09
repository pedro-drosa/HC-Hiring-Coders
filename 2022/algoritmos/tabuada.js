const { stdin, stdout } = require("process");
const readLine = require("readline");
const terminal = readLine.createInterface({ input: stdin, output: stdout });

function multiplicationTable(number) {
  for (let index = 0; index <= 10; index++) {
    console.log(`${number} X ${index} = ${number * index}`);
  }
}

terminal.question("Digite o número desejado: ", (value) => {
  multiplicationTable(parseInt(value));

  terminal.close();
});
