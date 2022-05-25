import Gameattackloop from "/src/Gameattackloop.js";
import Player from "/src/Player.js";
import generateChoice from "/src/randomizechoice.js";
export { player1 };
let player1 = new Player(); //new player
let computer = new Player(); //computer
//for computer
generateChoice(computer);
Gameattackloop(player1, computer);
