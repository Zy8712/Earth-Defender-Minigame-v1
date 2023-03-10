var boxCounter = 0;
var start = false;
var earthCounterTotal = 0;
var earthRemaining = 0;
var threatTotal = 0;
var threatRemaining = 0;

/* Upon loading */
window.onload = function(){
  createBoxes();
  $("myButton").observe("click", createBoxes);
}

function createBoxes(){
  /* Array containing paths to possible assets to generate */
  var planets = ["./Planets/Ice.png", "./Planets/Lava.png", "./Planets/Terran.png", "./Planets/Baren.png", "./Planets/Black_hole.png"];

  /* Generate 100 boxes */
  for(var i = 0; i < 100; i++){
    var newP = document.createElement("p");
    var newImg = document.createElement("img");
    var randomX = Math.floor(Math.random()*651);
    var randomY = Math.floor(Math.random()*651);
    var top = randomX + "px";
    var left = randomY + "px";
    newP.style.top = top;
    newP.style.left = left;
    var randomNum = Math.floor(Math.random() * 5);
    if(randomNum == 2){
      earthCounterTotal++;
      earthRemaining++;
    }
    else{
      threatTotal++;
      threatRemaining++;
    }
    newImg.src = planets[randomNum];
    newP.appendChild(newImg);
    newP.observe("mouseover", removeBox);
    $("container").appendChild(newP);
  }
  boxCounter += 100;
  $("count").innerHTML = "Boxes Left: " +boxCounter +", Earths Remaining: " +earthRemaining;
}

function removeBox(){
  var containing = document.getElementById("container");
  var boxNum = containing.getElementsByTagName("p").length;
  if(boxNum == 1){
    alert("Finished!");
  }
  boxCounter--;
  var image = this.getElementsByTagName("img")[0];
  if(image.getAttribute("src") == "./Planets/Terran.png"){
    earthRemaining--;
  }
  else{
    threatRemaining--;
  }
  $("count").innerHTML = "Boxes Left: " +boxCounter +", Earths Remaining: " +earthRemaining;
  $("container").removeChild(this);
}

/*
function updateStatus(){

}

*/

/*
function endgameStatistics(){


}
*/
