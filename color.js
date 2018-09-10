// ==============
// Variables
// ==============

var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = getElementById("colorDisplay");
var messageDisplay = getElementById("message");

// Display Color on Screen
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      changeColors(clickedColor);
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

// ==============
// Functions
// ==============
function changeColors(color) {
  //Loop through all colors
  for (var i = 0; i < color.length; i++) {
    //Change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
