const list = [1, 2, 5];
const add = [3, 4];

for (let i = 0; i < add.length; i++) {
  for (let k = 0; k < list.length; k++) {
    if (list[k] >= add[i]) {
      list.splice(k, 0, add[i]);
      k++;
    }
  }
}

console.log(list);

const newList = [1, 2, ...add, 5];
console.log(newList);

const arr1 = ["a", "b", "c"];
const arr2 = arr1;
const arr3 = [...arr1];

arr1.push("d");

console.log({ arr1, arr2, arr3 });
