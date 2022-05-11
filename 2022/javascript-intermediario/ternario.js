const isValid = true;

function verify(condition) {
  if (condition) return true;
  return false;
}

const thisISValid = isValid ? true : false;
const zero = 0;
const numberResult = 0 > zero ? 0 : -1;

console.log({ verify: verify(isValid), thisISValid, numberResult });
