import { converttoarray } from "./convertarraytostring.js";
import { testposition } from "./randomizechoice.js";
export { playerchoice };
let letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
export default function add_drop_drag_events() {
 const draggableElements = document.querySelectorAll(".board");
 const droppableElements = document.querySelectorAll(".block");
 draggableElements.forEach((elem) => {
  elem.addEventListener("dragstart", dragStart); // Fires as soon as the user starts dragging an item - This is where we can define the drag data
 });

 droppableElements.forEach((elem) => {
  elem.addEventListener("dragenter", dragEnter); // Fires when a dragged item enters a valid drop target
  elem.addEventListener("dragover", dragOver); // Fires when a dragged item is being dragged over a valid drop target, repeatedly while the draggable item is within the drop zone
  elem.addEventListener("dragleave", dragLeave); // Fires when a dragged item leaves a valid drop target
  elem.addEventListener("drop", drop); // Fires when an item is dropped on a valid drop target
 });
}
// Drag and Drop Functions

//Events fired on the drag target
function dragEnter(event) {
 event.target.classList.add("enter");
}
function dragLeave(event) {
 event.target.classList.remove("enter");
}
function dragStart(event) {
 event.dataTransfer.setData("text", event.target.id);
}

function dragOver(event) {
 if (!event.target.classList.contains("dropped")) {
  event.preventDefault(); // Prevent default to allow drop
 }
}
/*************************************/
let usedplaces = [];
let playerchoice = {
 carrier: [],
 battleship: [],
 cruiser: [],
 submarine: [],
 destroyer: [],
};
/****************************************/
function drop(event) {
 event.preventDefault();
 event.target.classList.remove("enter");

 const id = event.dataTransfer.getData("text"); // Get the dragged data. This method will return any data that was set to the same type in the setData() method
 const length = Number(document.getElementById(id).classList[1]);
 const position = event.target.getAttribute("id");
 const color = getComputedStyle(
  document.querySelector("#" + id)
 ).backgroundColor;
 const orientation = document.getElementById(id).classList[2];
 if (testposition(converttoarray(position), usedplaces, orientation, length)) {
  if (orientation == "vertical") {
   for (let i = 0; i < length; i++) {
    let j = position.substring(0, 1) + (Number(position.substring(1)) + i);
    usedplaces.push(converttoarray(j));
    playerchoice[id].push(j);
    document.getElementById(j).style.backgroundColor = color;
   }
  } else if (orientation == "horizontal") {
   for (let i = 0; i < length; i++) {
    let nextletter =
     letter[letter.findIndex((x) => x == position.substring(0, 1)) + i];
    let j = nextletter + position.substring(1);
    usedplaces.push(converttoarray(j));
    playerchoice[id].push(j);
    document.getElementById(j).style.backgroundColor = color;
    document.getElementById(j).classList.add("dropped");
   }
  }
  let draggableElement = document.getElementById(id);
  draggableElement.classList.add("dragged");
  draggableElement.remove();
 }
}
