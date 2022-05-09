const { stdin, stdout } = require("process");
const readLine = require("readline");
const terminal = readLine.createInterface({ input: stdin, output: stdout });

function evenSquare(number) {
  for (let index = 1; index <= number; index++) {
    if (index % 2 === 0) {
      console.log(`${index} ^ 2 = ${index ** 2}`);
    }
  }
}

terminal.question("Digite um número entre 5 e 2000: ", (number) => {
  if (!(number >= 5 && number < 2000)) {
    throw new Error("Digite valores entre 5 e 2000 ").stack;
  }

  evenSquare(6);

  terminal.close();
});
