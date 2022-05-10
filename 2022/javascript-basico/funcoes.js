function sum(a, b) {
  return a + b;
}

const sub = function (a, b) {
  return a - b;
};

const mult = (a, b) => {
  return a * b;
};

const resultA = sum(50, 100);
const resultB = sub(100, 50);
const resultC = mult(10, 5);

console.log({
  sum: resultA,
  sub: resultB,
  mult: resultC,
});
