const elements = [];
let top = -1;
const maxElements = 9;

function push(value) {
  if (top < maxElements) {
    top++;
    elements[top] = value;
  } else {
    console.log("the stack is full!");
  }
}

for (let i = 1; i <= 5; i++) {
  push(10 * i);
}

function pop() {
  if (top != -1) {
    const removed = elements[top];
    elements.splice(top, 1);
    top--;
    return `removed: ${removed}`;
  } else {
    console.log("the stack is empty!");
  }
}

console.log(pop());
console.log(pop());

console.log({ elements, top });
