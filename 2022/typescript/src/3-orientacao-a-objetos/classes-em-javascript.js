// sintatic sugar class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// é a mesma coisa que criar uma função padrão

function UserTwo(name, age) {
  (this.name = name), (this.age = age);
}

const pedro = new User("Pedro", 26);
const daiane = new UserTwo("Daiane", 27);

console.log(typeof pedro); // object
console.log(typeof daiane); // object

console.log(pedro);
console.log(daiane);

// Herança
class Player extends User {
  constructor(name, age, game) {
    super(name, age); // constructor User
    this.game = game;
  }
}

const player = new Player(pedro.name, pedro.age, "call of duty");
const playerTwo = new Player(daiane.name, daiane.age, "top gear");

console.log(player);
console.log(playerTwo);
