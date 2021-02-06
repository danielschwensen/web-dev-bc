function RollTheDice() {
    var r = Math.floor(Math.random() * 6 +1);
    return r;
}

var zahl1 = RollTheDice();
var zahl2 = RollTheDice();

var setSource1 = "../08_DiceGame/images/" + "dice" + zahl1.toString() + ".png"
var setSource2 = "../08_DiceGame/images/" + "dice" + zahl2.toString() + ".png"

document.getElementById("img1").src = setSource1;
//document.getElementById("img2").src = setSource2; 
document.querySelectorAll("img")[1].setAttribute("src", setSource2);

if(zahl1 == zahl2) {
    document.querySelector('h1').innerHTML=("Tie 🙁");
}
else if (zahl1 > zahl2) {
    document.querySelector('h1').innerHTML=("🚩 Player 1 Wins");
}
else {
    document.querySelector('h1').innerHTML=("Player 2 Wins 🚩");
}
