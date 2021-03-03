var pathToSounds = "../11_SimonGame/sounds/";
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

var buttonColours = ["red", "blue", "green", "yellow"];

$(document).one("keypress", function (e) {
  if (!started) {

    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }

});

//Button click detection
$(".btn").click(function() {
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  //console.log(userClickedPattern);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
  console.log("Game pattern: " + gamePattern);
  console.log("Clicked pattern: " + userClickedPattern);

});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }

}

function nextSequence() {

  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4 );
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

// remove class after 100 milliseconds
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// Play playSound
function playSound(name) {
  var audio = new Audio( pathToSounds + name + ".mp3" );
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  startem = false;
}