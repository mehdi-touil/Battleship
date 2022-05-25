import Gameattackloop from "./Gameattackloop.js";
import Player from "./Player.js";
import generateChoice from "./randomizechoice.js";
export { player1 };
let player1 = new Player(); //new player
let computer = new Player(); //computer
//for computer
generateChoice(computer);
Gameattackloop(player1, computer);
