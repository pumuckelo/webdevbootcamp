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
var gameOver = false;
var reset = document.getElementById("reset");

buttonSpieler1.addEventListener("click", function() {
  if (!gameOver) {
    score1++;

    if (score1 == maxscore) {
      score1Anzeige.classList.toggle("win");
      gameOver = true;
    }
  }
  score1Anzeige.textContent = score1;
});

buttonSpieler2.addEventListener("click", function() {
  if (!gameOver) {
    score2++;

    if (score2 == maxscore) {
      gameOver = true;
      score2Anzeige.classList.toggle("win");
    }
  }
  score2Anzeige.textContent = score2;
});

reset.addEventListener("click", function() {
  gameOver = false;
  if (score1 == maxscore) {
    score1Anzeige.classList.toggle("win");
  }
  if (score2 == maxscore) {
    score2Anzeige.classList.toggle("win");
  }
  score1 = 0;
  score2 = 0;
  score1Anzeige.textContent = score1;
  score2Anzeige.textContent = score2;
});

maxscoreinput.addEventListener("change", function() {
  if (!gameOver) {
    maxscore = this.value;
    maxscoreAnzeige.textContent = maxscore;
  }
});
