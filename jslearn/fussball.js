/// Variable fuer den Punktestand von Spieler 1
var score1Anzeige = document.getElementById("score1");
var score1 = 0;
// Variable fuer den Punktestand von Spieler 2
var score2Anzeige = document.getElementById("score2");
var score2 = 0;
// Ziel Punktestand
var maxscoreinput = document.getElementById("maxscore");
var maxscore = 5;
var maxscoreAnzeige = document.getElementById("maxscoreAnzeige");

var buttonSpieler1 = document.querySelector("#player1");
var buttonSpieler2 = document.querySelector("#player2");

buttonSpieler1.addEventListener("click", function() {
  score1++;
  score1Anzeige.textContent = score1;
});

buttonSpieler2.addEventListener("click", function() {
  score2++;
  score2Anzeige.textContent = score2;
});

maxscoreinput.addEventListener("click", function() {
  maxscore = maxscoreinput.value;
  maxscoreAnzeige.textContent = maxscore;
});
