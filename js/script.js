$(document).ready(function () {   // using the document.ready function to make sure the page is loaded before the script runs
    const quizData = [    // declaring the quizData variable and assigning it an array of objects
        {
          question: "Which method is used to convert a JavaScript object to a JSON string?",
          options: ["JSON.stringify()", "JSON.parse()", "stringify()", "toString()"],
          correct: "JSON.stringify()",
        },
        {
          question: "What does JSON stand for?",
          options: ["JavaScript Object Notation", "JavaScript Online Network", "Java Syntax On-demand", "JSON is not an acronym"],
          correct: "JavaScript Object Notation",
        },
        {
          question: "Which HTTP method is commonly used to send data in JSON format to a server?",
          options: ["GET", "POST", "PUT", "DELETE"],
          correct: "POST",
        },
        {
          question: "Which function is used to parse a JSON string back into a JavaScript object?",
          options: ["JSON.stringify()", "JSON.parse()", "parseJSON()", "stringifyJSON()"],
          correct: "JSON.parse()",
        },
        {
          question: "What is the file extension used for JSON files?",
          options: [".js", ".json", ".txt", ".html"],
          correct: ".json",
        },
        {
          question: "Which built-in method is used to convert a JSON string to a JavaScript object?",
          options: ["JSON.stringify()", "JSON.parse()", "parseJSON()", "stringifyJSON()"],
          correct: "JSON.parse()",
        },
        {
          question: "In JSON, which data type is represented by the value 'null'?",
          options: ["String", "Boolean", "Number", "Null"],
          correct: "Null",
        },
        {
          question: "Which symbol is used to separate key and value pairs in JSON?",
          options: [":", "=", "-", ","],
          correct: ":",
        },
        {
          question: "In JSON, which data type is represented by the value 'true'?",
          options: ["String", "Boolean", "Number", "Object"],
          correct: "Boolean",
        },
        {
          question: "What is the purpose of JSON?",
          options: ["To style web pages", "To create interactive web elements", "To represent and exchange data", "To execute server-side code"],
          correct: "To represent and exchange data",
        },
        {
          question: "Which method is used to remove a property from a JavaScript object before converting it to JSON?",
          options: ["deleteProperty()", "removeProperty()", "pop()", "splice()"],
          correct: "deleteProperty()",
        },
        {
          question: "Which character is used to enclose strings in JSON?",
          options: ['"', "'", "`", "!"],
          correct: '"',
        },
        {
          question: "Which of the following is a valid JSON object?",
          options: [
            '{ "name": "John", "age": 30, "city": "New York" }',
            '{ name: "John", age: 30, city: "New York" }',
            "{ 'name': 'John', 'age': 30, 'city': 'New York' }",
            '{ name: "John", age: 30, city: "New York" }',
          ],
          correct: '{ "name": "John", "age": 30, "city": "New York" }',
        },
        {
          question: "Which method is used to convert a JSON string to a formatted string with line breaks and indentation?",
          options: ["JSON.stringify()", "JSON.format()", "stringifyJSON()", "JSON.prettyPrint()"],
          correct: "JSON.stringify()",
        },
        {
          question: "In JSON, which data type is represented by the value 'false'?",
          options: ["String", "Boolean", "Number", "Array"],
          correct: "Boolean",
        },
        {
          question: "Which method is used to add a property to a JavaScript object before converting it to JSON?",
          options: ["push()", "append()", "addProperty()", "Object.assign()"],
          correct: "Object.assign()",
        },
        {
          question: "What is the data type of the result obtained after parsing a valid JSON string?",
          options: ["String", "Object", "Array", "Number"],
          correct: "Object",
        },
        {
          question: "In JSON, which data type is represented by the value '123'?",
          options: ["String", "Boolean", "Number", "Null"],
          correct: "Number",
        },
        {
          question: "Which method is used to check if a JSON string is valid?",
          options: ["isValidJSON()", "JSON.validate()", "JSON.parse()", "JSON.isValid()"],
          correct: "JSON.parse()",
        },
        {
          question: "What is the purpose of JSONP (JSON with Padding)?",
          options: ["To securely store passwords in JSON format", "To allow cross-origin requests with JSON data", "To compress JSON data for faster transmission", "To hide sensitive data in JSON objects"],
          correct: "To allow cross-origin requests with JSON data",
        },
      ];
      
      
  
    let currentQuestion = 0;  // declaring the currentQuestion variable and assigning it a value of 0, as we want to start at the first question
    let score = 0;  // the score needs to be set to 0 as we want to start at 0
    const totalTime = 60; // Total time for the entire quiz in seconds
    let timeLeft = totalTime;  // the timeLeft variable is set to the totalTime variable, as we want to start at the totalTime (start)
    let quizInterval; // Used to keep track of the interval for the overall timer
  
    const overallTimerElement = document.getElementById("overall-timer");  // using . notation to select the overall-timer element from the HTML
    const correctElement = document.getElementById("correct");  // getting the correct answer from the HTML
    const quizContainer = document.getElementById("quiz");  // getting the quiz container from the HTML
    const startButton = document.getElementById("start");   // getting the start button from the HTML
    const initialsInput = document.getElementById("initials");    // getting the initials input from the HTML
    const saveScoreButton = document.getElementById("saveScoreButton");  // getting the save score button from the HTML
    const scoreboard = document.getElementById("scoreboard");  // and finally getting the scoreboard from the HTML
  
    // function to start the quiz
    function startQuiz() {  
      startButton.style.display = "none";  // hiding the start button
      quizContainer.style.display = "block";  // showing the quiz container
      showQuestion();  // calling the showQuestion function declared below
      startOverallTimer();  // calling the startOverallTimer function declared below
    }
  
    // function to show the question to use in the startQuiz function above
    function showQuestion() {
        console.log("showQuestion called");  // logging to the console to make sure the function is called
        if (currentQuestion < quizData.length) {  // if the current question is less than the length of the quizData array, then show the question
          const questionData = quizData[currentQuestion];  // declaring the questionData variable and assigning it the currentQuestion variable
          console.log("Current Question:", questionData.question);  // logging the current question to the console
        // using innerHTML to display the question and options, by using the . notation to select the questionData variable and the question and options properties, and using the .join method to join the options together
          quizContainer.innerHTML = `
            <h2>${questionData.question}</h2>
            <ul>
              ${questionData.options
                .map(  // .map to map the options (not using .filter as we want to show all the options)
                  (option, index) =>  // once mapped, we want to return the option and index, and then join them together using the .join method, with an empty string.
                    `<li><button data-option="${index}">${option}</button></li>`
                )
                .join("")}
            </ul>
          `;
        } else {  // if the current question is not less than the length of the quizData array, then end the quiz
          endQuiz();
        }
      }      
    
    // function to check the answer: 
    // when the user clicks on an option, we want to check if the answer is correct or not, and generate dynamic HTML based on the answer via the showQuestion function declared on line 130
    function checkAnswer(selectedOption) {
        const questionData = quizData[currentQuestion];
        const selectedAnswer = questionData.options[selectedOption];
        if (selectedAnswer === questionData.correct) {  // if the selected answer is the correct answer, then add 1 to the score
          score++;
        } else {
          // If the answer is incorrect, deduct 10 seconds from the overall timer
          timeLeft = Math.max(0, timeLeft - 10);
        }
        currentQuestion++;
        showQuestion(); // this is where we call the showQuestion function declared on line 130
      }      
  
    // function to Start the overall timer
    function startOverallTimer() {
        overallTimerElement.style.display = "block";  // display the overall timer
        overallTimerElement.innerText = `Total Time: ${timeLeft}s`;  // display the time left, by having {timeLeft} as a variable declared below
        quizInterval = setInterval(() => {  // using setInterval to call the function every 1000 milliseconds (1 second), via an arrow function 
          timeLeft--;  // we are decrementing the time left by 1 second
          overallTimerElement.innerText = `Total Time: ${timeLeft}s`;
          if (timeLeft <= 0 || currentQuestion >= quizData.length) {  // if the time left is less than or equal to 0, or the current question is greater than or equal to the length of the quizData array, then end the quiz
            endQuiz();
          }
        }, 1000);
      }
  
    // function to end the quiz    
    function endQuiz() {
        clearInterval(quizInterval);  // clear the quiz interval 
        overallTimerElement.style.display = "none";  // hide the overall timer element
        correctElement.innerText = `Your score: ${score}/${quizData.length}`;  // display the score
        document.getElementById("hide").style.display = "block";  // display the hide element
        showLeaderboard();  // and finally call the showLeaderboard function declared below
    }
  
    // function to show the leaderboard
    function showLeaderboard() {
        const savedScores = JSON.parse(localStorage.getItem("scores")) || [];  // declaring the savedScores variable and assigning it the scores from local storage, or an empty array if there are no scores, parsed as JSON and stored in local storage
        savedScores.push({ initials: initialsInput.value, score });  // pushing the initials and score to the savedScores array
        savedScores.sort((a, b) => b.score - a.score);  // sorting the scores in descending order
        savedScores.splice(5); // Show only the top 5 scores
  
        localStorage.setItem("scores", JSON.stringify(savedScores));  // storing the scores in local storage, as a string via JSON.stringify
  
        scoreboard.innerHTML = savedScores   // using innerHTML to display the scoreboard, by using the . notation to select the savedScores variable and the initials and score properties, and using the .join method to join the initials and score together
          .map((data) => `<li>${data.initials}: ${data.score}</li>`)  // mapping the initials and score
          .join("");  // and joining them together with an empty string
    }
  
    // IMPORTANT! Event listeners
    startButton.addEventListener("click", startQuiz);  // when the start button is clicked, call the startQuiz function declared on line 127
    saveScoreButton.addEventListener("click", showLeaderboard);  // when the save score button is clicked, call the showLeaderboard function declared on line 195
  
    // Event delegation for handling button clicks within the quiz container
    quizContainer.addEventListener("click", function (event) {  // if the quiz container is clicked, then check if the target is a button
      if (event.target.tagName === "BUTTON") {  // if the target is a button, then get the selected option and check the answer
        const selectedOption = event.target.dataset.option;  // declaring the selectedOption variable and assigning it the target dataset option
        checkAnswer(selectedOption);  // and finally calling the checkAnswer function declared on line 159
      }
    });
  });
  