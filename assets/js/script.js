var header = document.getElementsByTagName("header");
var start = document.querySelector(".start");
var instruct = document.querySelector(".intro");
var questions = document.querySelector('.questions');
var time = document.querySelector(".timer-count");
var timeText = document.querySelector(".card-timer");
var losses = document.querySelector(".lose");
var reset = document.querySelector(".reset-button");


var lose = localStorage.getItem("lose");

// losses.textContent = lose;

var secondsLeft = 10;

document.querySelector("main").style.display = "none";

start.addEventListener("click", function() { 
start.style.display = 'none';
instruct.style.display = 'none';
document.querySelector("main").style.display = "flex";

  function setTime() {

    var timerInterval = setInterval(function() {
      secondsLeft--;
      time.textContent = secondsLeft;
  
      if(secondsLeft === -1) {
        clearInterval(timerInterval);
        // sendMessage();
        lose++;
        // losses.textContent = lose;
        localStorage.setItem("lose", lose);
      }
  
    }, 100);
    secondsLeft = 10;

  }
  setTime()
})

reset.addEventListener("click", function(){
  start.style.display = 'inline-block';
  instruct.style.display = 'block';
  document.querySelector("main").style.display = "none";
  time.textContent = 10;
})

function sendMessage() {
  // timeText.textContent= '';
  time.textContent = "GAME OVER ";
}
// setTime()
