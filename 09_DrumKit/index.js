/*
document.querySelector("button").addEventListener("click", function () {
    alert("I got clicked!")
});
*/

// Add click event to all buttons
var classname = document.getElementsByClassName("drum");

var clickButtons = function(){
    alert("I got clicked!")
};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', clickButtons);
}