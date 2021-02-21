// Using IIFE
(function() {
// Declaring array of colors
let hex = ["#1B4F72", "#D6EAF8", "#CB4335", "#943126", "#C39BD3", "#F1948A", "#FFEB3B", "#3c91e6", "#342E37", "#A2D729", "#FA824C"];
// Event Listener
document.getElementById("btn").addEventListener("click", function(){
let index = Math.floor(Math.random() * hex.length);
// Changing background color
document.body.style.background = hex[index];
// Where to display value?
document.getElementById("hex-value").innerHTML = hex[index];
});
})();
