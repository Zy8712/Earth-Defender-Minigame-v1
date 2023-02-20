var boxCounter = 0;
var start = false;
window.onload = function(){
  createBoxes();
  $("myButton").observe("click", createBoxes);
}

function createBoxes()
{
//  var colors = ["red", "green", "blue", "silver", "orange"];
  var planets = ["./Planets/Ice.png", "./Planets/Lava.png", "./Planets/Terran.png", "./Planets/Baren.png", "./Planets/Black_hole.png"];
  for(var i = 0; i < 100; i++){
    var newP = document.createElement("p");
    var newImg = document.createElement("img");
    var randomX = Math.floor(Math.random()*651);
    var randomY = Math.floor(Math.random()*651);
    var top = randomX + "px";
    var left = randomY + "px";
    newP.style.top = top;
    newP.style.left = left;
    newImg.src = planets[Math.floor(Math.random() * 5)];
    newP.appendChild(newImg);
//    newP.style.backgroundColor = colors[ Math.floor(Math.random() * 5)];
    newP.observe("mouseover", removeBox);
    $("container").appendChild(newP);
  }
  boxCounter += 100;
  $("count").innerHTML = "Boxes Left: " +boxCounter;
}

function removeBox(){
  var containing = document.getElementById("container");
  var boxNum = containing.getElementsByTagName("p").length;
  if(boxNum == 1){
    alert("Finished!");
  }
  boxCounter--;
  $("count").innerHTML = "Boxes Left: " +boxCounter;
  $("container").removeChild(this);
}
