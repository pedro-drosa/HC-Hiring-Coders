const number = 5;

console.log(`------ Número sorteado ------`);

for (let index = 0; index <= 10; index++) {
  if (number === index) {
    console.log(`🥳 Encontrei! O número escolhido foi: ${index}`);
  } else {
    console.log("😑 Não encontrei ainda!");
  }
}

const value = 7;

console.log(`------ Tabuada do ${value} ------`);

for (let index = 0; index <= 10; index++) {
  console.log(`${value} X ${index} = ${value * index}`);
}
