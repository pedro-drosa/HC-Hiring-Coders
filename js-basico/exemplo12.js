// Crie uma função que determina se um número é par ou impar.

const evenOrOdd = value => value % 2 === 0 ? `${value} é um número PAR` : `${value} é um número IMPAR`; 

console.log(evenOrOdd(26)); //26 é um número PAR
console.log(evenOrOdd(31)); //31 é um número IMPAR