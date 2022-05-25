import generateChoice from "./randomizechoice.js";
//colorate my ships in grid
function resetcolors(blockid_ends) {
 var blocks = document.querySelectorAll(".block" + blockid_ends);
 for (let i = 0; i < blocks.length; i++) {
  if (
   blocks[i].classList[1] &&
   (blocks[i].classList[1].endsWith("color") ||
    blocks[i].classList[1] == "dropped")
  ) {
   if (blocks[i].classList[1] == "dropped") {
    blocks[i].style.backgroundColor = "";
   }
   blocks[i].classList.remove(blocks[i].classList[1]);
  }
 }
}
export function Colorate_items_grid(blockid_ends, choice) {
 resetcolors(blockid_ends);
 for (let board in choice) {
  for (var i = 0; i < choice[board]["position"].length; i++) {
   var pos = choice[board]["position"][i];
   var block = document.getElementById(pos + blockid_ends);
   block.classList.add(board + "color");
  }
 }
}
//button random
export default function Colorategrid(player) {
 document.getElementById("random").addEventListener("click", () => {
  generateChoice(player);
  Colorate_items_grid("", player.gameboard.ships);
  Colorate_items_grid("P", player.gameboard.ships);
  document.querySelector(".boards").innerHTML = "";
 });
}
