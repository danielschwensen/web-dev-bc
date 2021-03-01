var pathToSounds = "../11_SimonGame/sounds/";
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4 );
    var randomChosenColour = buttonColours[randomNumber];
    //return randomChosenColour;
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);

    level++;
    $("#level-title").text("Level " + level);
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
  animatePress(userChosenColour);

});

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

// remove class after 100 milliseconds
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

$(document).one("keypress", function (e) {
  if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }

});