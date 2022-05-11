function sum(a, b) {
  return a + b;
}

console.log(sum(3, 5));

const mult = function (a, b) {
  return a * b;
};

console.log(mult(5, 10));

const div = (a, b) => a / b;

console.log(div(4, 2));

const object = () => ({ name: "Pedro", lastName: "Mascarenhas", age: 26 });
console.log(object());
