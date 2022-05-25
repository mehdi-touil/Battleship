export default function ship(length, name) {
 return {
  name,
  length,
  position: [],
  hitted_in: [],
  sunked: false,
  hit: function (newhit) {
   this.hitted_in.push(newhit);
  },
  isSunk: function () {
   if (this.hitted_in.length == length) {
    this.sunked = true;
    return true;
   } else return false;
  },
 };
}
