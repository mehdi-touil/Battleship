let letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
let grid1 = document.querySelector(".grid1");
let grid2 = document.querySelector(".grid2");
export function creategrid(grid, string, title) {
 var div = document.createElement("div");
 for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
   if (i == 0 && j == 0) {
    div.innerText = "";
    div.classList.add("graduation");
   } else if (i == 0 && j != 0) {
    div.innerText = letter[j - 1];
    div.classList.add("graduation");
   } else if (j == 0 && i != 0) {
    div.innerText = i;
    div.classList.add("graduation");
   } else {
    div.id = letter[j - 1] + i + string;
    div.classList.add("block" + string);
   }

   grid.appendChild(div.cloneNode(true));
   div.innerText = "";
   div.id = "";
   div.className = "";
  }
 }
}
export default function makeattack_DOM(id, computer) {
 let div = document.getElementById(id);
 var found = 0;
 Object.values(computer.gameboard.ships).forEach((ship) => {
  if (
   ship.position.includes(
    id.length == 3 ? id.substring(0, 2) : id.substring(0, 3)
   )
  ) {
   div.classList.add("hitted");
   found = 1;
  }
 });
 if (found == 0) div.classList.add("missed");
}
creategrid(grid1, "P", "Myships");
creategrid(grid2, "C", "opponent ships");
