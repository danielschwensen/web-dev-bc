$(document).ready(function(){
    $("h1").css("color", "red");
});

$(document).ready(function() {
    $( "input" ).val('');
  });

$("button").css("background-color", "azure");
$("button").css("padding", "50");

//$("button").css("margin-left", "20px");
//$("button").css("margin-top", "20px");
$("button").addClass("margin-20");

$("h1").addClass("big-title margin-20");

$("#target-1").click(function () {
    $("button").css("border", "dotted"); 
});

$("p").click(function () {
    $(this).slideUp(); 
});

//Right-Click
$( "#target-2" ).contextmenu(function() {
    $("#target-2").remove();
});
  
$("p").mousemove(function () {
    //$("body").remove(); 
    //$("body").text("Hello"!);
});

$("#target-3").mouseenter(function() {
    $("#target-3").css("background-color", "yellow");
});

$("#target-3").mouseleave(function() {
    $("#target-3").css("background-color", "azure");
});

$("input").keypress(function (event) {
    //console.log(event.key);
    $("h1").text(event.key);
});

/* $("#target-4").on("click", function () {
    $("h1").fadeOut(); 
}); */

$("#target-4").on("click", function () {
    $("h1").slideUp().slideDown().animate({opacity: 0.5}); 
});