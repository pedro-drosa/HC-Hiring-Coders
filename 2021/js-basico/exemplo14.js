//Crie um algoritmo que receba três notas de um aluno, calcule sua média e
//e mostre as seguintes mensagens de acordo com cada situação:
// - Se a média for igual ou maior que 7 - Aprovado
// - Se a média for igual a 5 e menor que 7 - Recuperação
// - Se a média for menor que 5 - Reprovado

function calculateTheAverage(values) {
  const sum = values.reduce((acummulator, value) => {
    return acummulator + value;
  }, 0)

  const average = sum / values.length;

  if (average >= 7) {
    console.log(`Média: ${average}, Aprovado.`);
  } else if( average >= 5 && average < 7) {
    console.log(`Média: ${average}, Recuperação.`);
  } else {
    console.log(`Média: ${average}, Reprovado.`);
  }
}

console.log(calculateTheAverage([10, 9, 8])); // Aprovado
console.log(calculateTheAverage([7, 6, 5])); // Recuperação
console.log(calculateTheAverage([4, 3, 2])); // Reprovado
