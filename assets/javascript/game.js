//build a game
//a game with 4 crystal and random result
//every crystal needs to have a random number between 1 - 12
//a new random number should be generate every single time we win or lost
//when clicking any CRYSTAL, it shoild adding with the previous result
//Until it equwls the total score
//If it is not equel, we loset and incremet a lost
//if it is equal then we increment a win counter

var wins = 0;
var losses = 0;
var addition = 0 ;
var total = Math.floor((Math.random() * 50) + 19);

var red = Math.floor((Math.random() * 12) + 1);
var purple = Math.floor(Math.random() * 12 + 1);
var yellow = Math.floor(Math.random() * 12 + 1);
var blue = Math.floor(Math.random() * 12 + 1);

var updateAddition = function() {
  $(".addition").empty();
  $(".addition").append(addition);

  $("#wins").empty();
  $("#wins").append(wins);

  $("#losses").empty();
  $("#losses").append(losses);
}

var restart = function() {
  addition = 0;
  total = Math.floor(Math.random() * 50 + 19);

  $(".total").empty();
  $(".total").append(total);

  var red = Math.floor((Math.random() * 12) + 1);
  var purple = Math.floor(Math.random() * 12 + 1);
  var yellow = Math.floor(Math.random() * 12 + 1);
  var blue = Math.floor(Math.random() * 12 + 1);  
  updateAddition();
}

var game = function() {
  if (addition == total) {
    wins = wins + 1;
    alert("You win!");
    restart();
  }
  else if (addition > total) {
    losses = losses + 1;
    alert("You lost");
    restart();
  }
  else {
    updateAddition();
  }
}

$(".total").append(total);
$(".addition").append(addition);

$(document).ready(function() {
  $("#red").click(function() {
    addition = addition + red;
    game();
  })

  $("#purple").click(function() {
    addition = addition + purple;
    game();
  })

  $("#yellow").click(function() {
    addition = addition + yellow;
    game();
  })

  $("#blue").click(function() {
    addition = addition + blue;
    game();
  })


})





