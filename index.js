document.querySelector(".playButton").addEventListener("click", function() {

  document.querySelector(".playButton").textContent = "Jogar de novo";

  document.querySelector(".p1wins").classList.add("hidden");
  document.querySelector(".p2wins").classList.add("hidden");
  document.querySelector(".draw").classList.add("hidden");

  document.querySelector(".start").classList.remove("hidden");
  document.querySelector(".start").classList.add("wait");

  newGame();
})

var i = 1;
var timer = 50;

function newGame() {

  setTimeout(function() {

    //Animation

    var result1 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img1").setAttribute("src", "images/dice" + result1 + ".png");

    var result2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".img2").setAttribute("src", "images/dice" + result2 + ".png");

    i++;
    timer = timer + 50;

    if (i < 10) {
      newGame();
    } else {

      i = 1;
      timer = 50;

      //Random Game

      var result1 = Math.floor(Math.random() * 6) + 1;
      document.querySelector(".img1").setAttribute("src", "images/dice" + result1 + ".png");

      var result2 = Math.floor(Math.random() * 6) + 1;
      document.querySelector(".img2").setAttribute("src", "images/dice" + result2 + ".png");

      //Result

      document.querySelector(".start").classList.remove("wait");
      document.querySelector(".start").classList.add("hidden");

      if (result1 > result2) {
        document.querySelector(".p1wins").classList.remove("hidden");
        document.querySelector(".p2wins").classList.add("hidden");
        document.querySelector(".draw").classList.add("hidden");
      }

      if (result1 < result2) {
        document.querySelector(".p1wins").classList.add("hidden");
        document.querySelector(".p2wins").classList.remove("hidden");
        document.querySelector(".draw").classList.add("hidden");
      }

      if (result1 === result2) {
        document.querySelector(".p1wins").classList.add("hidden");
        document.querySelector(".p2wins").classList.add("hidden");
        document.querySelector(".draw").classList.remove("hidden");
      }
    }

  }, timer)
}