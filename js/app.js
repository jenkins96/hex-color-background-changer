/*
// An array containing all the hex values possibilities
const hex = ["#1B4F72", "#D6EAF8", "#CB4335", "#943126", "#C39BD3", "#F1948A", "#FFEB3B", "#3c91e6", "#342E37", "#A2D729", "#FA824C"];
// Defining where in the html document the hex value will be display
const display = document.getElementById("hex-value");
// Defining button
const button = document.getElementById("btn");
// Function
changeColorOnClick = () => {
// Generating a random integer number for selecting a hex value in the array
    let index = Math.floor(Math.random() * hex.length);
    document.body.style.background = hex[index];
    display.innerHTML = hex[index];
}
//Event Listener
button.addEventListener("click", changeColorOnClick);
*/
// Using IIFE
(function() {
let hex = ["#1B4F72", "#D6EAF8", "#CB4335", "#943126", "#C39BD3", "#F1948A", "#FFEB3B", "#3c91e6", "#342E37", "#A2D729", "#FA824C"];
let button = document.getElementById("btn").addEventListener("click", changeColorOnClick(){
let index = Math.floor(Math.random() * hex.length);
document.body.style.background = hex[index];
document.getElementById("hex-value").innerHTML = hex[index];
});
})();
