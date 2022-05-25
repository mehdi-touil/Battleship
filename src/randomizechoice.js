import converttostring from "./convertarraytostring.js";
function searchForArray(haystack, needle) {
 // used for saying that [1,1] is in [[1,1],[5,2]]
 var i, j, current;
 for (i = 0; i < haystack.length; ++i) {
  if (needle.length === haystack[i].length) {
   current = haystack[i];
   for (j = 0; j < needle.length && needle[j] === current[j]; ++j);
   if (j === needle.length) return i;
  }
 }
 return -1;
}
//testposition test if a certain position could stick the ship taking in count length ,orientation,and if near places are used by another one
export function testposition(position, usedplaces, orientation, length) {
 if (orientation == "vertical" && position[1] + length - 1 > 10) {
  return false;
 }
 if (orientation == "horizontal" && position[0] + length - 1 > 10) {
  return false;
 } else if (orientation == "horizontal" && position[0] + length - 1 <= 10) {
  //horizontal
  for (var i = position[0]; i <= length + position[0] - 1; i++) {
   var point = new Array(i, position[1]);
   if (searchForArray(usedplaces, point) != -1) {
    return false;
   }
  }
  return true;
 }
 //vertical
 else if (orientation == "vertical" && position[1] + length - 1 <= 10) {
  for (let i = position[1]; i <= position[1] + length - 1; i++) {
   var point = new Array(position[0], i);
   if (searchForArray(usedplaces, point) != -1) {
    return false;
   }
  }
  return true;
 }
}
//generate position generate a position taking a length and usedplaces to avoid them
export function generateposition(length, usedplaces) {
 do {
  var orientation = ["vertical", "horizontal"][Math.floor(Math.random() * 2)];
  var x = Math.floor(Math.random() * 10 + 1);
  var y = Math.floor(Math.random() * 10 + 1);
 } while (!testposition([x, y], usedplaces, orientation, length));
 let output = [];
 if (orientation == "horizontal") {
  for (var i = x; i <= length + x - 1; i++) {
   var point = new Array(i, y);
   output.push(converttostring(point));
   usedplaces.push(point);
  }
 } else {
  for (var i = y; i <= y + length - 1; i++) {
   var point = new Array(x, i);
   output.push(converttostring(point));
   usedplaces.push(point);
  }
 }
 return output;
}
//generate positions of ships of a player
export default function generateChoice(player) {
 let usedplaces = [];
 player.gameboard.ships.carrier.position = generateposition(5, usedplaces);
 player.gameboard.ships.battleship.position = generateposition(4, usedplaces);
 player.gameboard.ships.cruiser.position = generateposition(3, usedplaces);
 player.gameboard.ships.submarine.position = generateposition(3, usedplaces);
 player.gameboard.ships.destroyer.position = generateposition(2, usedplaces);
}
