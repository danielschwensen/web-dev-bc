var pathToSounds = "../11_SimonGame/sounds/";
var gamePattern = [];
var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4 );
    var randomChosenColour = buttonColours[randomNumber];
    //return randomChosenColour;
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
}

//Blink
//$(" #randomChosenColour ").fadeOut(100).fadeIn(100);

// Play playSound
function playSound(name) {
    var audio = new Audio( pathToSounds + name + ".mp3" );
    audio.play();
}

//Button click detection
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  //console.log(userClickedPattern);

});