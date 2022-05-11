let cats: string[] = ["lora", "logan"];

// cats.push(5) // Erro
cats.push("seven");

function showCats(cats: string[]) {
  return `Os gatos são: ${cats.join(", ")}`;
}

console.log(showCats(cats));
