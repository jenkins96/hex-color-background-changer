// An array containing all the hex values possibilities
const hex = [];
// Generating a random integer number for selecting a hex value in the array
const index = Math.floor(Math.random() * hex.length);
// Defining where in the html document the hex value will be display
const display = document.getElementById("hex-value");