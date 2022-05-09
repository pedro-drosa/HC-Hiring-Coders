const { stdin, stdout } = require("process");
const readLine = require("readline");
const average = require("./average");

const terminal = readLine.createInterface({ input: stdin, output: stdout });

terminal.question("Digite a primeira nota: ", (a) => {
  terminal.question("Digite a segunda nota: ", (b) => {
    const result = average(parseInt(a), parseInt(b));

    if (result >= 6)
      console.log(`Média: ${result}, Parabéns você foi aprovado!`);
    else console.log(`Média: ${result}, nos vemos ano que vem ;)`);

    terminal.close();
  });
});
