let myName = "Pedro";

if (myName === "Pedro") {
  console.log(`Hello, welcome ${myName}`);
} else if (myName === "Mascarenhas") {
  console.log(`Hello, welcome ${myName}`);
} else {
  console.log("Hello, Stranger!");
}

myName = "Filho";

switch (myName) {
  case "Pedro":
    console.log(`Hello, welcome back ${myName}`);
    break;
  case "Mascarenhas":
    console.log(`Hello, welcome back ${myName}`);
    break;
  default:
    console.log("Hello, Stranger!");
    break;
}
