//imprima na tela os números pares existentes entre 0 e 100.

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let counter = 0;

while (counter <= 100) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
  counter++;
}

let interator = 0;

do {
  if (interator % 2 === 0) {
    console.log(interator);
  }
  interator ++;
} while (interator <= 100);