//Crie uma função que recebe o ano de nascimento da pessoa 
//informando se ela é maior de idade ou menor.

function verify(year) {
  return new Date().getFullYear() - year ? `Maior` : `Menor`;
}

console.log(verify(1995));