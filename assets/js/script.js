var header = document.getElementsByTagName("header");
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
var timeText = document.querySelector(".timer-text");
var losses = document.querySelector(".lose");
var reset = document.querySelector(".reset-button");
var end = document.querySelector(".end");


var lose = localStorage.getItem("lose");


var secondsLeft = 10;

questions1.style.display = 'none';
questions2.style.display = 'none';
questions3.style.display = 'none';
questions4.style.display = 'none';
questions5.style.display = 'none';
timeText.style.display = 'none';
end.style.display = 'none';
correct.style.display = 'none';
wrong.style.display = 'none';


start.addEventListener("click", function() { 
start.style.display = 'none';
instruct.style.display = 'none';
questions1.style.display = "block";
timeText.style.display = 'block';


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

//Question 1 answers
a1.addEventListener("click", function(){
  questions1.style.display = 'none';
  questions2.style.display = 'block';
  correct.style.display = 'block';
  wrong.style.display = 'none';

}
)

b1.addEventListener("click", function(){
  questions1.style.display = 'none';
  questions2.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';

}
)

c1.addEventListener("click", function(){
  questions1.style.display = 'none';
  questions2.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';

}
)

d1.addEventListener("click", function(){
  questions1.style.display = 'none';
  questions2.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';

}
)

//Question 2 answers
a2.addEventListener("click", function(){
  questions2.style.display = 'none';
  questions3.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';

}
)

b2.addEventListener("click", function(){
  questions2.style.display = 'none';
  questions3.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';

}
)

c2.addEventListener("click", function(){
  questions2.style.display = 'none';
  questions3.style.display = 'block';
  correct.style.display = 'block';
  wrong.style.display = 'none';

}
)

d2.addEventListener("click", function(){
  questions2.style.display = 'none';
  questions3.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';

}
)

//Question 3 answers
a3.addEventListener("click", function(){
  questions3.style.display = 'none';
  questions4.style.display = 'block';
  correct.style.display = 'block';
  wrong.style.display = 'none';

}
)

b3.addEventListener("click", function(){
  questions3.style.display = 'none';
  questions4.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';

}
)

c3.addEventListener("click", function(){
  questions3.style.display = 'none';
  questions4.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';

}
)

d3.addEventListener("click", function(){
  questions3.style.display = 'none';
  questions4.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';

}
)

//Question 4 answers
a4.addEventListener("click", function(){
  questions4.style.display = 'none';
  questions5.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';

}
)

b4.addEventListener("click", function(){
  questions4.style.display = 'none';
  questions5.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';

}
)

c4.addEventListener("click", function(){
  questions4.style.display = 'none';
  questions5.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';

}
)

d4.addEventListener("click", function(){
  questions4.style.display = 'none';
  questions5.style.display = 'block';
  correct.style.display = 'block';
  wrong.style.display = 'none';

}
)

//Question 5 answers
a5.addEventListener("click", function(){
  questions5.style.display = 'none';
  end.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';

}
)

b5.addEventListener("click", function(){
  questions5.style.display = 'none';
  end.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';

}
)

c5.addEventListener("click", function(){
  questions5.style.display = 'none';
  end.style.display = 'block';
  correct.style.display = 'block';
  wrong.style.display = 'none';

}
)

d5.addEventListener("click", function(){
  questions5.style.display = 'none';
  end.style.display = 'block';
  correct.style.display = 'none';
  wrong.style.display = 'block';

}
)


reset.addEventListener("click", function(){
  start.style.display = 'inline-block';
  instruct.style.display = 'block';
  questions1.style.display = 'none';
  end.style.display = 'none';
  correct.style.display = 'none';
  wrong.style.display = 'none';
  time.textContent = 10;
})

function sendMessage() {
  // timeText.textContent= '';
  time.textContent = "GAME OVER ";
}
// setTime()
