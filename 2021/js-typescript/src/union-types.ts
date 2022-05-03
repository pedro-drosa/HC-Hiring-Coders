// Union Types
const age: string | number = '26';

function showNote(note:number | string): string {
  return `${note}`;
}

console.log(showNote(10));
console.log(showNote('7'));
