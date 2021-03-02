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
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");

  }

}

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