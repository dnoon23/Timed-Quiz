//Variables set up to be able to select and alter what is displayed on the webpage
var start = document.querySelector(".start");
var instruct = document.querySelector(".intro");
var questions1 = document.querySelector('.questions1');
var questions2 = document.querySelector('.questions2');
var questions3 = document.querySelector('.questions3');
var questions4 = document.querySelector('.questions4');
var questions5 = document.querySelector('.questions5');
var a1 = document.querySelector('.a1');
var b1 = document.querySelector('.b1');
var c1 = document.querySelector('.c1');
var d1 = document.querySelector('.d1');
var a2 = document.querySelector('.a2');
var b2 = document.querySelector('.b2');
var c2 = document.querySelector('.c2');
var d2 = document.querySelector('.d2');
var a3 = document.querySelector('.a3');
var b3 = document.querySelector('.b3');
var c3 = document.querySelector('.c3');
var d3 = document.querySelector('.d3');
var a4 = document.querySelector('.a4');
var b4 = document.querySelector('.b4');
var c4 = document.querySelector('.c4');
var d4 = document.querySelector('.d4');
var a5 = document.querySelector('.a5');
var b5 = document.querySelector('.b5');
var c5 = document.querySelector('.c5');
var d5 = document.querySelector('.d5');
var time = document.querySelector(".timer-count");
var correct = document.querySelector(".correct");
var wrong = document.querySelector(".wrong");
var finish = document.querySelector(".finish")
var timeUp = document.querySelector(".timeUp");
var timeText = document.querySelector(".timer-text");
var entry = document.querySelector(".entry");
var initials = document.querySelector(".initials");
var scoreButton = document.querySelector(".score-button");
var reset = document.querySelector(".reset-button");
var clear = document.querySelector(".clear-button");
var end = document.querySelector(".end");

//Hides all elements other then the start of the game when the page is launched
questions1.style.display = 'none';
questions2.style.display = 'none';
questions3.style.display = 'none';
questions4.style.display = 'none';
questions5.style.display = 'none';
timeText.style.display = 'none';
end.style.display = 'none';
correct.style.display = 'none';
wrong.style.display = 'none';
timeUp.style.display = 'none';
entry.style.display = 'none';
finish.style.display = 'none';

//Starts timer and ends the game and the timer when either time is 0 or last question is answered
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    time.textContent = secondsLeft;

    //Ends game if timer is 0
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      questions1.style.display = 'none';
      questions2.style.display = 'none';
      questions3.style.display = 'none';
      questions4.style.display = 'none';
      questions5.style.display = 'none';
      entry.style.display = 'block';
      correct.style.display = 'none';
      wrong.style.display = 'none';
      timeUp.style.display = 'block';
      score = secondsLeft;
      localStorage.setItem("score", score);
    }
    //ends game and stores the time when last answer is selected and displays it on the next screen
    else if (a5.addEventListener("click", function () {
      clearInterval(timerInterval);
      time.textContent = secondsLeft;
      score = secondsLeft;
      localStorage.setItem("score", score);
      var scoreTi = localStorage.getItem("score");
      document.querySelector('.finish').textContent = "Your score was " + scoreTi + " seconds.";
    })) { }
    else if (b5.addEventListener("click", function () {
      clearInterval(timerInterval);
      time.textContent = secondsLeft;
      score = secondsLeft;
      localStorage.setItem("score", score);
      var scoreTi = localStorage.getItem("score");
      document.querySelector('.finish').textContent = "Your score was " + scoreTi + " seconds.";
    })) { }
    else if (c5.addEventListener("click", function () {
      clearInterval(timerInterval);
      time.textContent = secondsLeft;
      score = secondsLeft;
      localStorage.setItem("score", score);
      var scoreTi = localStorage.getItem("score");
      document.querySelector('.finish').textContent = "Your score was " + scoreTi + " seconds.";
    })) { }
    else if (d5.addEventListener("click", function () {
      clearInterval(timerInterval);
      time.textContent = secondsLeft;
      score = secondsLeft;
      localStorage.setItem("score", score);
      var scoreTi = localStorage.getItem("score");
      document.querySelector('.finish').textContent = "Your score was " + scoreTi + " seconds.";
    })) { }
  }, 1000);

  secondsLeft = 100;
}

//Starts the game and reveals the first question
start.addEventListener("click", function () {
  start.style.display = 'none';
  instruct.style.display = 'none';
  questions1.style.display = "block";
  timeText.style.display = 'block';
  setTime()
});

//Question 1 answers.  Tells if answer is right or wrong, hides question 1, reveals question 2, and if answer is wrong subtracts 5 seconds
a1.addEventListener("click", function () {
  questions1.style.display = 'none';
  questions2.style.display = 'block';
  correct.style.display = 'block';
  wrong.style.display = 'none';

});

b1.addEventListener("click", function () {
  questions1.style.display = 'none';
  questions2.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';
  secondsLeft -= 5;

});

c1.addEventListener("click", function () {
  questions1.style.display = 'none';
  questions2.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';
  secondsLeft -= 5;

});

d1.addEventListener("click", function () {
  questions1.style.display = 'none';
  questions2.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';
  secondsLeft -= 5;

});

//Question 2 answers.  Tells if answer is right or wrong, hides question 2, reveals question 3, and if answer is wrong subtracts 5 seconds
a2.addEventListener("click", function () {
  questions2.style.display = 'none';
  questions3.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';
  secondsLeft -= 5;

});

b2.addEventListener("click", function () {
  questions2.style.display = 'none';
  questions3.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';
  secondsLeft -= 5;

});

c2.addEventListener("click", function () {
  questions2.style.display = 'none';
  questions3.style.display = 'block';
  correct.style.display = 'block';
  wrong.style.display = 'none';

});

d2.addEventListener("click", function () {
  questions2.style.display = 'none';
  questions3.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';
  secondsLeft -= 5;

});

//Question 3 answers.  Tells if answer is right or wrong, hides question 3, reveals question 4, and if answer is wrong subtracts 5 seconds
a3.addEventListener("click", function () {
  questions3.style.display = 'none';
  questions4.style.display = 'block';
  correct.style.display = 'block';
  wrong.style.display = 'none';

});

b3.addEventListener("click", function () {
  questions3.style.display = 'none';
  questions4.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';
  secondsLeft -= 5;

});

c3.addEventListener("click", function () {
  questions3.style.display = 'none';
  questions4.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';
  secondsLeft -= 5;

});

d3.addEventListener("click", function () {
  questions3.style.display = 'none';
  questions4.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';
  secondsLeft -= 5;

});

//Question 4 answers.  Tells if answer is right or wrong, hides question 4, reveals question 5, and if answer is wrong subtracts 5 seconds
a4.addEventListener("click", function () {
  questions4.style.display = 'none';
  questions5.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';
  secondsLeft -= 5;

});

b4.addEventListener("click", function () {
  questions4.style.display = 'none';
  questions5.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';
  secondsLeft -= 5;

});

c4.addEventListener("click", function () {
  questions4.style.display = 'none';
  questions5.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';
  secondsLeft -= 5;

});

d4.addEventListener("click", function () {
  questions4.style.display = 'none';
  questions5.style.display = 'block';
  correct.style.display = 'block';
  wrong.style.display = 'none';

});

//Question 5 answers.  Tells if answer is right or wrong, hides question 5, reveals results page, and if answer is wrong subtracts 5 seconds
a5.addEventListener("click", function () {
  questions5.style.display = 'none';
  entry.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';
  secondsLeft -= 5;
  finish.style.display = 'block';

});

b5.addEventListener("click", function () {
  questions5.style.display = 'none';
  entry.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';
  secondsLeft -= 5;
  finish.style.display = 'block';

});

c5.addEventListener("click", function () {
  questions5.style.display = 'none';
  entry.style.display = 'block';
  correct.style.display = 'block';
  wrong.style.display = 'none';
  finish.style.display = 'block';

});

d5.addEventListener("click", function () {
  questions5.style.display = 'none';
  entry.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';
  secondsLeft -= 5;
  finish.style.display = 'block';

});

//Addes functionality to the results page.  Stores the initials that are entered and displayes the initials paired with the score on the next page
scoreButton.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("initials", initials.value);
  var scoreIn = localStorage.getItem("initials");
  var scoreTi = localStorage.getItem("score");
  document.querySelector('.scoreIn').textContent = scoreIn + " : " + scoreTi + " seconds";
  correct.style.display = 'none';
  wrong.style.display = 'none';
  entry.style.display = 'none';
  timeUp.style.display = 'none';
  finish.style.display = 'none';
  end.style.display = 'block';
});

//Addes functionality to the reset button.  Resets the page to the start and resets timer
reset.addEventListener("click", function () {
  start.style.display = 'inline-block';
  instruct.style.display = 'block';
  questions1.style.display = 'none';
  end.style.display = 'none';
  correct.style.display = 'none';
  wrong.style.display = 'none';
  entry.style.display = 'none';
  timeText.style.display = 'none';
  time.textContent = 100;
});

//Clears scores by clicking clear score button
clear.addEventListener("click", function () {
  document.querySelector('.scoreIn').textContent = "";
});
