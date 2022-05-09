const values = [50, 60, 100, 120, 200, 600];

function linearSearch(value) {
  for (let i = 0; i < 6; i++) {
    if (values[i] === value) {
      return i;
    }
  }

  return -1;
}

// console.log(linearSearch(120));
// console.log(linearSearch(10));

// [X] Definir início = 0 e fim = tamanho do vetor
// [X] pegar a posiçao do meio = (0 + 5) / 2 (obs: os dados devem estar ordenados)
// [X] loop para percorrer todos os valores (ex: While)
// [X] o valor é igual ao elemento que está no meio da lista? se sim retorna o meio
// [X] Se não, verificar se o valor buscado é maior ou menor que o meio
// [X] Se for maior, meio será o novo início e fim permanece o mesmo
// [X] Se for menor meio será o novo fim, e início permenece o mesmo

function binarySearch(value) {
  let start = 0;
  let middle;
  let end = 5; // tamanho do vetor

  while (start <= end) {
    middle = parseInt((start + end) / 2);
    if (value == values[middle]) {
      return middle;
    } else {
      if (value > values[middle]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
  }
  return -1;
}

console.log(binarySearch(100)); // 2
console.log(binarySearch(120)); // 3
console.log(binarySearch(600)); // 5
