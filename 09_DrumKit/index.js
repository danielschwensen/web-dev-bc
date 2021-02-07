/*
document.querySelector("button").addEventListener("click", function () {
    alert("I got clicked!")
});
*/

// Add click event to all buttons
var classname = document.getElementsByClassName("drum");

var clickButtons = function(){
    //var audio = new Audio('../09_DrumKit/sounds/snare.mp3');
    //audio.play();
    this.style.color = "white";
    //console.log(this);

};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', clickButtons);
}