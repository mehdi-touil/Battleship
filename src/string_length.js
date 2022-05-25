export default function string_length(color, length, orientation) {
 var string = "";
 if (orientation == "vertical")
  for (let i = 1; i < length; i++) {
   string += `${color} ${28 * i}px 0px,`;
  }
 else {
  for (let i = 1; i <= length; i++) {
   string += `0px ${28 * i}px ${color},`;
  }
 }
 return string.slice(0, -1);
}
