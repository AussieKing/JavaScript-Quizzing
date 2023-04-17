//! ========================== GENERAL ================================
//! Step 1: define variables
var secondsLeft = 75 //Number of Seconds on Timer
var timerCount = document.getElementById('timer')
var quiz = document.getElementById('quiz')
var startButton = document.getElementById('start')
var scores = document.getElementById('scores')
var rightAnswers = 0 //Number of quiz questions user answers correctly
var questionId = 0 //Position of current question in quizQuestions array

// potential BUG HERE ?
//! Step 3: Section showing number of correct questions as the quiz is going
var correct = $("#correct");
correct.text("Correct Answers: 0");


//! Step 4: ================= QUESTIONS ================================
let quizQuestions = [
  {
    numb : 1,
    question: "Commonly used data types DO NOT include:",
    correct: "Alerts",  // this is the correct answer to log later
    answers: [ 
      "Strings",
      "Booleans",
      "Alerts",
      "Numbers",
      ]
  },
  {numb : 2,
  question: "The condition in an if/else statement is enclosed within _____.",
  correct: "parenthesis",  // this is the correct answer to log later
  answers: [ 
      "quotes",
      "curly brackets",
      "parenthesis",
      "square brackets",
      ]
 },
 {numb : 3,
  question: "Arrays in JavaScrips can be used to store _____",
  correct: "all of the above",  // this is the correct answer to log later
  answers: [ 
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
  ]
},
{numb : 4,
  question: "String values must be enclosed within _____ when assigned to variables.",
  correct: "curly brackets", // this is the correct answer to log later
  answers: [ 
      "commas",
      "curly brackets",
      "quotes",
      "parenthesis",
  ]
},
{numb : 5,
  question: "A very useful tool used during development and debugging for printing content to the debugger is ____",
  correct: "console log",  // this is the correct answer to log later
  answers: [ 
      "JavaScript",
      "terminal / bash",
      "for loops",
      "console log",
  ]
},
{numb : 6,
  question: "What is the result of the following code snippet: typeof null?",
  correct: "Object",  // this is the correct answer to log later
  answers: [ 
      "Undefined",
      "Object",
      "null",
      "Boolean",
  ]
},
{numb : 7,
  question: "What is the output of the following code: console.log('5' + 10)?",
  correct: "510",  // this is the correct answer to log later
  answers: [ 
      "510",
      "15",
      "50",
      "error",
  ]
}]
//! ========================== SCORE BOARD ================================
var displayScores = function() {  // taking the high scores and stringifying them to display them on the page
    var savedHighScores = JSON.parse(localStorage.getItem("HighScores")) || []; 

    //Creating a li with the name + score for each saved score
    savedHighScores.forEach((savedScoreboard)=> {
        let savedName = savedScoreboard.name;
        let savedScore = savedScoreboard.score;
        let liEl = document.createElement("li")
        liEl.textContent = `${savedName} --- ${savedScore}`;
        var scoreboardEl = document.getElementById("scoreboard");
        scoreboardEl && scoreboardEl.appendChild(liEl);
    })
};

displayScores();

var timeLeft = function () {  // if time runs out, alert user and display message
    secondsLeft--;
    if (secondsLeft >= 0) {
        timerCount.textContent = secondsLeft;
    }
    if (secondsLeft === 0) {
        alert("Oh No! Time ran out!")
        return
    }
}

function startQuiz() {  // clicking the Start button will:
    timerCount.removeAttribute("style") //display the timer
    timer = setInterval(timeLeft, 1000) //start the timer starting from 75 seconds, 1second each time)
    startButton.setAttribute("style", "display: none") //hide the start button (so that it doesn't cover the questions)
    getQuestion()  //call the questions function
 }

//! =================  DEFINE FUNCTION FOR QUESTIONS ==========================
function getQuestion() {
    quiz.innerHTML = "";
    var currentQuestion = quizQuestions[questionId]

    //use jQuery to create an h2 element with the questions//
    var questionH2 = $('<h2>').text(currentQuestion.question);
    $('#quiz').append(questionH2);

    //each answer becomes a button and is appended to the quiz div//
    currentQuestion.answers.forEach((answer) => {
        var answerEl = document.createElement("button")
        answerEl.textContent = answer;
        quiz.appendChild(answerEl)

//! =================  DEFINE FUNCTION FOR ANSWERS ==========================
        answerEl.onclick = function () {
            if (answer === currentQuestion.correct) {  //If the answer selected is right, add 1point to the counter//
                rightAnswers++
                correct.textContent = "Correct Answers: " + rightAnswers + "\/7"
            } else {
                secondsLeft -= 10  //If the answer selected is wrong, take 10 seconds off the timer//
            }
        
            questionId++ 
            if (questionId === quizQuestions.length); //next question 

            //How do we know when the quiz is over? By matching the question number to the length of the array. If they match (ie: 7 and 7), then clear the interval and hide the question page//
            if (questionId == quizQuestions.length) {
                quiz.innerHTML = "";
                clearInterval(timer);
                document.getElementById("hide").removeAttribute("style");
            }
            else {
                quiz.innerHTML = "";
                getQuestion();
            }
            console.log(rightAnswers); //! SCORE IS LOGGING FINE BUT COUNT NOT UPDATING
        }
    })
}
//! ======================= SAVE SCORES ON LOCAL STORAGE =======================
//executed when Save Score button is clicked
const submitScore = (event) => {
    event.preventDefault(); //prevent page from refreshing on click
    var savedHighScores = JSON.parse(localStorage.getItem("HighScores")) || [];
    if (document.querySelector("input").value == "") {
        alert("Must enter letters");
        return false; //User must input letters into form
    }
    let name = document.querySelector("input").value;
    //Value saved to storage will be initials + correct answer value
    let saved = { name, score: rightAnswers } //Create item for each name and score
    savedHighScores.push(saved); //Push item into savedHighScores array
    localStorage.setItem("HighScores", JSON.stringify(savedHighScores)); //Store array to local storage
    document.querySelector("form").reset(); //Clear form after submit
}

//Run submitScore when clicking Save Score button//
document.getElementById("saveScoreButton").addEventListener("click", submitScore);

//Start Quiz when clicking Start button//
$('#start').click(startQuiz);
