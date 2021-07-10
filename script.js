"use strict";

const gridContainer = document.querySelector(".grid-container");
let startingGridSize = 16;

// create Div element under container
function addDiv() {
  const newDiv = document.createElement("div");
  gridContainer.appendChild(newDiv).classList.add("grid-container-items");
}

// function createGrid()
function createGrid(size) {
  if (size > 64) {
    size = Number(prompt("Enter new size"));
  }
  for (let i = 0; i < size ** 2; i++) {
    addDiv();
    singleGridColor();
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  }
}

// hover then change colour
function singleGridColor() {
  const singleGrid = document.querySelectorAll(".grid-container-items");
  singleGrid.forEach((i) => {
    i.addEventListener("mouseover", function () {
      i.setAttribute("style", "background:grey");
    });
  });
}

// Click Button
const button = document.querySelector(".button");
console.log(button);
button.addEventListener("click", function () {
  startingGridSize = Number(prompt("Enter New Number"));
});

createGrid(16);
