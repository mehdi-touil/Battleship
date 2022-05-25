// convert [1,1] to A1
let letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
export default function converttostring(array) {
 return letter[array[0] - 1] + array[1];
}
export function converttoarray(position) {
 let x = position.substring(0, 1);
 let y = Number(position.substring(1));
 x = letter.findIndex((t) => t == x) + 1;
 return [x, y];
}
