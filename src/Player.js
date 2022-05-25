import Gameboard from "/src/Gameboard.js";

export default class Player {
 constructor() {
  this.gameboard = Gameboard();
  this.shotted = [];
 }
 makeAttack(pos, enemyboard) {
  enemyboard.receiveAttack(pos);
  this.shotted.push(pos);
 }
}
