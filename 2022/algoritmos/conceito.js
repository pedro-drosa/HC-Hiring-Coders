const { stdin, stdout } = require("process");
const readLine = require("readline");
const average = require("./average");

const terminal = readLine.createInterface({ input: stdin, output: stdout });

terminal.question("Digite a primeira nota: ", (a) => {
  terminal.question("Digite a segunda nota: ", (b) => {
    const result = average(parseInt(a), parseInt(b));

    if (result >= 9) {
      console.log(`Média ${result}: Conceito A`);
    } else if (result >= 8 && result < 9) {
      console.log(`Média ${result}: Conceito B`);
    } else if (result >= 6 && result < 8) {
      console.log(`Média ${result}: Conceito C`);
    } else if (result >= 5 && result < 6) {
      console.log(`Média ${result}: Conceito D`);
    } else {
      console.log(`Média ${result}: Conceito R`);
    }

    terminal.close();
  });
});
