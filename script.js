"use strict";

// 16x16 grid of square divs
const gridContainer = document.querySelector(".grid-container");

function addDiv() {
  const newDiv = document.createElement("div");
  gridContainer.appendChild(newDiv).classList.add("grid-container-items");
}
for (let i = 0; i < 16 * 16; i++) {
  addDiv();
}

//hover effect on grid divs
const singleGridHover = document.querySelectorAll(".grid-container-items");
singleGridHover.forEach((i) => {
  i.addEventListener("mouseover", function () {
    i.setAttribute("style", "background: grey");
  });
});

// button for a new grid
const button = document.getElementsByClassName("button");

/*
3. Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid. Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
    1. Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
    2. Also check out prompts.
    3. You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
*/

/*
4. (Optional): Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.
*/
