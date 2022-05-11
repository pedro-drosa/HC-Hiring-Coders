let age: number;

age = 25;
// age = "25"; // Erro

function sumAge(initial: number, final: number) {
  return initial + final;
}

sumAge(26, 1);
// sumAge('25', 1); // Erro
