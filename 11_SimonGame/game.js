var pathToSounds = "../11_SimonGame/sounds/";
var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4 );
    var randomChosenColour = buttonColours[randomNumber];
    //return randomChosenColour;
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    var playSound = new Audio( pathToSounds + randomChosenColour + ".mp3" );
    playSound.play();
    gamePattern.push(randomChosenColour);
}

//Blink
//$(" #randomChosenColour ").fadeOut(100).fadeIn(100);

