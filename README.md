# AussieKing JavaScript Quiz for beginners

This is a simple web application to practice your knowledge on JavaScript via a short series of multi-answer questions.
The score is calculated based on how many correct answers are given on a pre-determined amount of questions (5 in this case), and cross referenced with how much time is left on the clock.

## Table of Contents

- [Features](#features)
- [Usage Guidelines](#usage-guidelines)
- [Languages Used](#languages-used)
- [Screenshots](#screenshots)
- [Live URL and Repository](#live-url-and-repository)
- [Credits](#credits)
- [License](#license)

## Features

 The web browser app consists of dynamical HTML and CSS powered by JavaScript. It has a simple and respinsive UI that adapts to multiple screen sizes.

The application features the following:

- The quiz questions presented is composed of 5 questions around basic JavaScript.
  - Each questions has 4 possible answers.
- An overall countdown timer starts at the start of the quiz and does not stop until it hits 0 seconds, or the user has answered all questions.
  - The user is given 15 seconds per question (in this case, 5 questions = 75 seconds total).
  - A 10-second penalty is applied for each incorrect answer.
  - The countdown timer is displayed numerically and graphically with a progress bar in the header.
- The number of questions is displayed in the footer.
- The user is shown if the selected answer is correct (answer highlighted in green, with a tick), or incorrect (answer highlighted in red, with a cross). If the user selects the incorrect answer, the right answer is also automatically displayed.
 - After the last question is answered, the application shows the user's score and number of correct answers given.
- Upon completion of the quiz, the user is shown their score, and can enter their initials to save their score to the high scores list.

## Usage guidelines

Clone the repository to your local machine and open the `index.html` file in your browser to view the quiz application, or go to the [live site](#live-url-and-repository).

1. Open the application in your preferred web browser (Google Chrome recommended).
2. Click the "Start Quiz" button to start the quiz, and read the Rules.
3. Answer the questions by clicking on the answer displayed on the screen.
4. When the quiz is complete, enter your initials to save your score to the high scores list. ##(NOTE TO SELF : this part needs implementation)
5. Click the "Quit" button to quit the application.
6. Click the "Replay Quiz" button to start a new quiz.

## Languages Used

- HTML
- CSS
  - Flexbox
  - Media Queries
  - CSS Variables
- JavaScript
  - DOM Manipulation
  - Event Listeners
  - Event Handlers
  - Bubbling up
  - Custom Events
  - Local Storage
  - Functions
  - Classes

## Screenshots

### Start Quiz screen

![Screen Shot 2023-04-10 at 2 37 44 pm](https://user-images.githubusercontent.com/126050763/230827386-fa709bc8-8327-46a9-9e1a-7ed8e832c913.png)


### Rules

![Screen Shot 2023-04-10 at 2 37 55 pm](https://user-images.githubusercontent.com/126050763/230827333-1e3ef70b-1d18-464f-92ea-141d564f179c.png)

### Correct answer feedback

![Screen Shot 2023-04-10 at 2 38 17 pm](https://user-images.githubusercontent.com/126050763/230827324-ce7bc427-46c6-4ccb-b1e0-3e2b9e5056f0.png)

### Incorrect answer feedback

![Screen Shot 2023-04-10 at 2 38 25 pm](https://user-images.githubusercontent.com/126050763/230827280-7be6d69c-c57f-432c-9971-6afbafa6d87b.png)

### Score Screen

![Screen Shot 2023-04-10 at 2 38 44 pm](https://user-images.githubusercontent.com/126050763/230827243-97a46f45-ac1a-4e68-94ec-5b3b47aa3d3f.png)


## Live URL and Repository

The live application can be accessed at the following URL: 

The repository can be accessed at the following URL: 

## Credits

- Google Fonts for the typeface - [Poppins](https://fonts.google.com/specimen/Poppins)

- Help from OpenAI's [ChatGPT](https://chat.openai.com/chat) for answering many questions about JavaScript and CSS.

- Our study group (every Saturday) especially Rene Malingre for his patience and guidance, the knowledgeable TA and Teachers, and the TAs available to us that help us through the week!

## License

Under the terms of the MIT license.

© 2023 AussieKing

