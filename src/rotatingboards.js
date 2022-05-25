import string_length from "./string_length.js";
export default function rotate_boards_events() {
 document.querySelectorAll(".board").forEach((elem) => {
  elem.addEventListener("dblclick", () => {
   var length = Number(elem.classList[1]);
   var color = getComputedStyle(
    document.querySelector("#" + elem.id)
   ).backgroundColor;
   if (elem.classList[2] == "vertical") {
    var horizontals = document.querySelectorAll(".horizontal");
    var length_ver = document.querySelectorAll(".vertical").length;
    for (let i = 0; i < horizontals.length; i++) {
     horizontals[i].classList.remove("translate" + length_ver);
    }
    elem.style.boxShadow = string_length(color, length, elem.classList[2]);
    elem.classList.replace("vertical", "horizontal");
   } else if (elem.classList[2] == "horizontal") {
    elem.style.boxShadow = string_length(color, length - 1, elem.classList[2]);
    elem.classList.replace("horizontal", "vertical");
    var horizontals = document.querySelectorAll(".horizontal");
    var length_ver = document.querySelectorAll(".vertical").length;
    for (let i = 0; i < horizontals.length; i++) {
     horizontals[i].classList.add("translate" + length_ver);
    }
   }
  });
 });
}
