let isActive: boolean;

isActive = true;
// isActive = "teste"; //Erro

function userStatus(status: boolean): string {
  if (status) return `Usuário está ativo`;
  return `Usuário está inativo`;
}

console.log(userStatus(isActive));
