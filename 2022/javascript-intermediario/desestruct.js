const whoami = {
  name: "Pedro",
  lastname: "Mascarenhas",
  age: 26,
  occupationArea: "Dev Junior",
};

console.log(whoami);

// const name = whoami.name;
// const lastname = whoami.lastname;
// const age = whoami.age;
// const occupationArea = whoami.occupationArea;

const { name, lastname, age, occupationArea } = whoami;

console.log(name, lastname, age, occupationArea);
