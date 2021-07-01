//Reverse a string

let newStr = '';

function reverseAString(str) {
  const letters = str.split("").reverse();
  let reverseWorld = '';

  for (let index = 0; index < letters.length; index++) {
    reverseWorld +=  letters[index];
    console.log(reverseWorld);
  }
}

let result = reverseAString('Pedro, Hello Gama Academy');