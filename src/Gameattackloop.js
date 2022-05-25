import makeattack_DOM from "./grid.js";
import computerplay from "./computerplay.js";
function testwinner(enemy_oftheplayer, who) {
 if (enemy_oftheplayer.gameboard.isAllSunk()) {
  document.querySelector(".winnercontainer").style.display = "flex";
  document.getElementById("winnertext").innerText = who + " Wins";
  document.getElementById("replay").addEventListener("click", () => {
   location.reload();
  });
  document.querySelector(".gamecontainer").classList.add("blur");
 }
}

export default function Gameattackloop(player, computer) {
 const blocks = document.querySelectorAll(".blockC");
 blocks.forEach((block) => {
  block.addEventListener(
   "click",
   () => {
    makeattack_DOM(block.id, computer); //attack in dom
    player.makeAttack(block.id.slice(0, -1), computer.gameboard); //attack process
    //test if a ship issunk
    Object.values(computer.gameboard.ships).forEach((ship) => {
     if (!ship.sunked && ship.isSunk()) {
      document.querySelector(
       ".inside"
      ).innerText = `You sunked his ${ship.name}`;
     }
    });
    testwinner(computer, "You");
    computerplay(computer, player);
    testwinner(player, "Computer");
   },
   { once: true }
  );
 });
}
