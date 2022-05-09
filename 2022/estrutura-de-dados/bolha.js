//dada uma determinada lista, comparar o valor atual em relação ao próximo
// [X] definir início = 0 e fim = tamanho da lista
// [X] definir o tmp = maior valor entre os dois
// [X] Se o valor atual é maior que o próximo
// [X] tmp = valor atual
// [X] posição atual recebe o próximo valor
// [X] próxima posição recebe tmp
// [X] realizamos os mesmos passas até que a lista termine For, While

const values = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function ordenar(values) {
  const end = 10;
  const start = 0;
  let tmp;

  for (let i = 0; i < end; i++) {
    for (let pos = start; pos < end - 1; pos++) {
      if (values[pos] > values[pos + 1]) {
        tmp = values[pos];
        values[pos] = values[pos + 1];
        values[pos + 1] = tmp;
      }
    }
  }
}

ordenar(values);
console.log(values);
