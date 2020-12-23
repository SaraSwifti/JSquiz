//my psuedo code for getting started. 
//variables and attributes//
var timer = document.getElementById("timer");
var timeCounter = document.getElementById("timeCounter")
var setTimer = 75
var btnStart = document.getElementById("start-btn");
var questionBox = document.getElementById("question-box")
var startBox = document.getElementById("quizStart")
//var points = 
//var prompt


//the data variable for my questions, answers and choices objects in an array//
var questions = [
    {
        promptQuestion: "which Data type contains multiple data types that are separated by commas and has a simular name to a sea creature?",
        choices: ["stings", "boolance", "array", "objects"],
        correctAns: "array"
    },
    {
        promptQuestion: "which Data type contains multiple data types that are separated by commas and has a simular name to a sea creature?",
        choices: ["stings", "boolance", "arrays", "objects"],
        correctAns: "arrays"
    },
    {
        promptQuestion:"which Data type contains multiple data types that are separated by commas and has a simular name to a sea creature?",
        choices: ["stings", "boolance", "arrays", "objects"],
        correctAns: "arrays"
    },
    {
        promptQuestion: "which Data type contains multiple data types that are separated by commas and has a simular name to a sea creature?",
        choices: ["stings", "boolance", "arrays", "objects"],
        correctAns: "arrays"
    },
    {
        promptQuestion: "which Data type contains multiple data types that are separated by commas and has a simular name to a sea creature?",
        choices: ["stings", "boolance", "arrays", "objects"],
        correctAns: "arrays"
    }

]

//timer function to sych with timer varialbe an inner. HTML//
// Timer that counts down from 75
/*var setTimer = 75
function countdown() {
    
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }*/

// function to start the quiz//
btnStart.addEventListener("click",startQuiz);
function startQuiz(){
    questionBox.classList.remove("d-n");
    startBox.classList.add("d-n");
    timeCounter.classList.remove("d-n");
    




    //everything that needs to happen when the program needs to start over again//
}
//