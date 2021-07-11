// Type Assertion

const myAge: any = 23;
(myAge as number).toString();

const inputEl = document.getElementById('title') as HTMLInputElement;
const inputEl2 = <HTMLInputElement>document.getElementById('title');

console.log(inputEl.value);
console.log(inputEl2.value);