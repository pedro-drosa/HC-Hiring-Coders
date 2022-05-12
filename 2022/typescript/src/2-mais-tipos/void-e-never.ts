function a() {
  // number
  return 1;
}

function b() {
  // string
  return "";
}

function main(): void {
  // void
  const valueA = a();
  const valueB = b();
}

console.log(main()); // undefined

// Quando a função dispara um erro ou lopp infinito

function infinityLoop(): never {
  while (true) {}
}

function error(): never {
  throw new Error("Deu ruim!").stack;
}
