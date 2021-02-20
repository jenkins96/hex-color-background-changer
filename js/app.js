// An array containing all the hex values possibilities
const hex = ["#1B4F72", "#D6EAF8", "#CB4335", "#943126", "#C39BD3", "#F1948A", "#FFEB3B"];
// Generating a random integer number for selecting a hex value in the array
const index = Math.floor(Math.random() * hex.length);
// Defining where in the html document the hex value will be display
const display = document.getElementById("hex-value");
// Defining button
const button = document.getElementById("btn");
// Function
changeColorOnClick = () => {
    body.style.background = hex[index];
    display.innerHTML = hex[index];
}
//Event Listener
button.addEventListener("click", changeColorOnClick);