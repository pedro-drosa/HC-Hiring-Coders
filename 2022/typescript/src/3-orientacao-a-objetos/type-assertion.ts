type GameTree = {
  name: string;
  description: string;
};

let game = {} as GameTree; // assertions
// Ou
let gamtwo = <GameTree>{}; // generics

game.name = "Call of Duty";
gamtwo.name = "Zelda";
