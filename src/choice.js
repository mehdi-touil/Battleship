import { creategrid } from "./grid.js";
import { player1 } from "./gameloop.js";
import add_drop_drag_events from "./dragdrop.js";
import rotate_boards_events from "./rotatingboards.js";
import helpmenu from "./popupmenu.js";
import { Colorate_items_grid } from "./colorate_grids_positions.js";
import Colorategrid from "./colorate_grids_positions.js";
import { playerchoice } from "./dragdrop.js";
let choicepanel = document.querySelector(".choicepanel");
creategrid(choicepanel, "", "");
add_drop_drag_events();
rotate_boards_events();
//pop up menu
helpmenu(0);
helpmenu(1);
//placing finished
var timer = setInterval(function () {
 var boards = document.querySelector(".boards");
 if (boards.childElementCount == 0) {
  //do
  clearInterval(timer);
  //startgame();
  document.querySelector(".console").classList.add("close");
  boards.classList.add("close");
  document.querySelector(".startgame").classList.add("starttransition");
  document.querySelector(".right").style.height = "10vh";
 }
}, 1000);
//startgamebutton
document.getElementById("start").addEventListener("click", () => {
 document.querySelector(".homepanel").classList.add("none");
 //document.querySelector(".gamecontainer").style.display = "grid";
 document.querySelector(".gamecontainer").classList.remove("none");

 Colorate_items_grid("P", player1.gameboard.ships);
});
//affect player choice
player1.gameboard.ships.carrier.position = playerchoice.carrier;
player1.gameboard.ships.battleship.position = playerchoice.battleship;
player1.gameboard.ships.cruiser.position = playerchoice.cruiser;
player1.gameboard.ships.submarine.position = playerchoice.submarine;
player1.gameboard.ships.destroyer.position = playerchoice.destroyer;
//colorate after random choice
Colorategrid(player1);
