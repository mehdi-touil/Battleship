import ship from "./ship.js";
export default function Gameboard() {
 let carrier = ship(5, "carrier");
 let battleship = ship(4, "battleship");
 let cruiser = ship(3, "cruiser");
 let submarine = ship(3, "submarine");
 let destroyer = ship(2, "destroyer");
 return {
  missed_hit: [],
  ships: { carrier, battleship, cruiser, submarine, destroyer },
  receiveAttack: function (pos) {
   let found = 0;
   Object.values(this.ships).forEach((ship) => {
    if (ship.position.includes(pos)) {
     let i = ship.position.findIndex((x) => x == pos) + 1;
     ship.hit(i);
     found = 1;
    }
   });
   if (found == 0) this.missed_hit.push(pos);
  },
  isAllSunk: function () {
   return (
    carrier.isSunk() &&
    battleship.isSunk() &&
    cruiser.isSunk() &&
    submarine.isSunk() &&
    destroyer.isSunk()
   );
  },
 };
}
