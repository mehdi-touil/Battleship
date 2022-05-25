import makeattack_DOM from "/src/grid.js";
async function wait() {
 await new Promise((resolve) => setTimeout(resolve, 1000));
}

function generate_block_choice(blocks, usedblocks) {
 let nbrblocks = blocks.length;
 do {
  var random_number = Math.floor(Math.random() * nbrblocks);
  var block = blocks[random_number];
 } while (usedblocks.includes(block.id.slice(0, -1)));
 return block;
}
export default function computerplay(computer, player) {
 const blocks = document.querySelectorAll(".blockP");
 var block = generate_block_choice(blocks, computer.shotted); //random block
 makeattack_DOM(block.id, player); //attack in dom
 computer.makeAttack(block.id.slice(0, -1), player.gameboard); //attack process
 //test if a ship issunk
 Object.values(player.gameboard.ships).forEach((ship) => {
  if (!ship.sunked && ship.isSunk()) {
   document.querySelector(".inside").innerText = `he sunked your ${ship.name}`;
   wait();
  }
 });
}
