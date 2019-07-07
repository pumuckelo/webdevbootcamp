var differentColors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 0)",
  "rgb(128, 220, 0)",
  "rgb(255, 190, 255)"
];

var rechtecke = document.getElementsByClassName("rechteck");
var colorDisplay = document.querySelector("#colorDisplay");
var pickedColor = differentColors[4];

for (i = 0; i < rechtecke.length; i++) {
  // Sets color for Rechtecke
  rechtecke[i].style.backgroundColor = differentColors[i];
  //creats eventlisteners
  rechtecke[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      alert("Du hast die richtige Farbe ausgewählt");
      this.style.border = "5px solid green";
    } else {
      this.style.backgroundColor = "#232323";
    }
  });
}

colorDisplay.textContent = pickedColor;
