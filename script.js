"use strict";

const gridContainer = document.querySelector(".grid-container");

// function createGrid()
function createGrid(size) {
  if (size > 64) {
    size = prompt("Enter new size");
  }
  for (let i = 0; i < size ** 2; i++) {
    function addDiv() {
      const newDiv = document.createElement("div");
      gridContainer.appendChild(newDiv).classList.add("grid-container-items");
    }
    addDiv();
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  }
}

// function prompt ()
createGrid(prompt("Enter new size"));

// function hover and change color
// const singleGrid = document.querySelectorAll(".grid-container-items");
// singleGrid.forEach((i) => {
//   i.addEventListener("mouseover", function () {
//     i.setAttribute("style", "background: grey");

// // create 16x16 grid of square divs
// for (let i = 0; i < 16 ** 2; i++) {
//   addDiv();
// }

// create new Etch-a-Sketch Grid
// const singleGrid = document.querySelectorAll(".grid-container-items");
// const button = document.querySelector(".button");
// button.addEventListener("click", function () {
//   // remove all singleGrid div
//   for (let i = 0; i < 16 ** 2; i++) {
//     gridContainer.removeChild(singleGrid[i]);
//   }

//   // prompt for new number
//   let newDimension = Number(prompt("Enter Number"));

//   // create new Div with new Numbers
//   for (let i = 0; i < newDimension ** 2; i++) {
//     addDiv();
//     gridContainer.style.gridTemplateColumns = `repeat(${newDimension}, 1fr)`;
//     gridContainer.style.gridTemplateRows = `repeat(${newDimension}, 1fr)`;
//   }
// });
