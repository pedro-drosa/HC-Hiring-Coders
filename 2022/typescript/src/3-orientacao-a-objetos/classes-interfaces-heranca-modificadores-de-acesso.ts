// Classes, interfaces, herança  e modificadores de acesso

// Classes e funções
class Users {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Player extends Users {
  public game: string;

  constructor(name: string, age: number, game: string) {
    super(name, age); // constructor User
    this.game = game;
  }

  getGame() {
    return `Estou jogando no momento: ${this.game}`;
  }

  static getHour() {
    return new Date();
  }
}

const player = new Player("Pedro", 26, "call of duty");
console.log(player.getGame());

// static

console.log(Player.getHour());

// private, protected, public.
// public: acessível dentro e fora da classe.
// private: acessível dentro da classe.
// protected: acessivel dentro da classe e sub-classes. (extends)
class Game {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public showGame() {
    return `O nome do jogo é ${this.name}`;
  }

  protected showName() {
    return this.name;
  }
}

const callOfDuty = new Game("Call of Duty");
// console.log(callOfDuty.name); // Erro pois a propriedade é privada

console.log(callOfDuty.showGame()); // Call of Duty

// extends e implements

class GamesInfo extends Game implements IGamesInfo {
  private _description: string;

  constructor(name: string, description: string) {
    super(name);
    this._description = description;
  }

  // Interfaces definem contratos "públicos" e, como tal, não faz sentido ter ou acessar modificadores em interfaces

  set description(description: string) {
    this._description = description;
  }

  showNameAndDescription() {
    return `Estou jogando: ${this.showName()}, um ${
      this._description
    } sensacional!`;
  }
}

const topGear = new GamesInfo("Top Gear", "Jogo de Corrida");
console.log(topGear.showNameAndDescription());

// interfaces

interface IGamesInfo {
  description: string;
  showNameAndDescription: () => string;
}

// Quando redeclaramos uma interface elas se unem, sendo assim devemos respeitar a estrutura das duas
// Quando se deparar com esse cenário é possível utilizar Union types tbm

interface IGamesInfo {
  date?: string;
}

//Outra forma implementando diretamente em um objeto literal
const fooObj: IGamesInfo = {
  description: "um jogo Qualquer",
  date: "2022",
  showNameAndDescription: () => `Essa é a descrição do jogo`,
};
