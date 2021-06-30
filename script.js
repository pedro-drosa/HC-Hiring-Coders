//[HC] Módulo 04 - JavaScript Básico
// FizzBuzz
//Divisível por 3 => 'Fizz' 9
//Divisível por 5 => 'Buzz' 20
//Divisível por 3 e 5 => 'FizzBuzz' 15
//Se não for um número => 'Não é um número'
//Se não for divisível por 3 ou 5 => 'Entrada' 7

function fizzBuzz(entrada) {
  if(typeof entrada !== 'number'){
    return 'Não é um número';
  }

  if (entrada % 3 === 0 && entrada % 5 === 0) {
    return 'fizzBuzz';
  }

  if (entrada % 3 === 0) {
    return 'Fizz';
  }

  if(entrada % 5 === 0) {
    return 'Buzz';
  }

  return entrada
}

console.log(fizzBuzz())




