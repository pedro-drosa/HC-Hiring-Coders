let firstName: string;

firstName = "Pedro";
// firstName = 30; //Erro

const lastName = "Mascarenhas";

function fullName(name: string, lastName: string) {
  return `${name} ${lastName}`;
}

fullName("Pedro", "Mascarenhas");
