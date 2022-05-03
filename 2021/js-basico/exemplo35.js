//Crie uma função que recebe o ano de nascimento da pessoa 
//informando se ela é maior de idade ou menor.

function calculateAge(year) {
  const age = new Date().getFullYear() - year;
  return  age  >= 18 ? `Idade: ${age} - Maior` : `Idade: ${age} - Menor`;
}

console.log(calculateAge(1995));