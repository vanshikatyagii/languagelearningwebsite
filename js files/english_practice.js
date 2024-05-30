const quizQuestions = [
    {
      question: "Which of the following is a correct plural form of 'child'?",
      options: ["childs", "childen", "children", "child's"],
      correctAnswer: "children"
    },
    {
      question: "What is the past tense of 'eat'?",
      options: ["eated", "ate", "eated", "eaten"],
      correctAnswer: "ate"
    },
    {
      question: "Choose the correct sentence: 'She go to school every day' or 'She goes to school every day'?",
      options: ["She go to school every day", "She goes to school every day"],
      correctAnswer: "She goes to school every day"
    },
    {
      question: "Which of the following is a compound sentence?",
      options: ["I like to swim.", "She sang a song.", "The dog barked loudly.", "He ran fast and won the race."],
      correctAnswer: "He ran fast and won the race."
    },
    {
      question: "What part of speech is the word 'quickly' in the sentence: 'He ran quickly'?",
      options: ["Adjective", "Noun", "Verb", "Adverb"],
      correctAnswer: "Adverb"
    },
    {
      question: "Choose the correct sentence: 'Their going to the park' or 'They're going to the park'?",
      options: ["Their going to the park", "They're going to the park"],
      correctAnswer: "They're going to the park"
    },
    {
      question: "What is the superlative form of the adjective 'big'?",
      options: ["Bigger", "Biggest", "More big", "Biger"],
      correctAnswer: "Biggest"
    },
    {
      question: "Identify the subject in the sentence: 'The cat chased the mouse.'",
      options: ["Cat", "Chased", "Mouse", "The"],
      correctAnswer: "Cat"
    },
    {
      question: "Which of the following sentences is in the passive voice?",
      options: ["She baked a cake.", "The book was written by John.", "They will finish the project tomorrow.", "I love to read."],
      correctAnswer: "The book was written by John."
    },
    {
      question: "What type of conjunction is 'but' in the sentence: 'I like ice cream, but I don't like cake'?",
      options: ["Coordinating", "Correlative", "Subordinating", "None of the above"],
      correctAnswer: "Coordinating"
    }
];
// Variables to track quiz state
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 120;
let timerInterval;

// Function to start the quiz
function startQuiz() {
  // Hide the start button and display the first question
  document.getElementById("start-button").style.display = "none";
  displayQuestion();
  startTimer();
}

// Function to display a question and its options
function displayQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  const questionText = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");

  // Clear previous question and answer options
  questionText.innerHTML = "";
  answerButtons.innerHTML = "";

  // Display the current question
  questionText.innerHTML = currentQuestion.question;

  // Create answer buttons for each option
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("answer-button");
    answerButtons.appendChild(button);

    // Add click event listener to check the answer
    button.addEventListener("click", function() {
      checkAnswer(option);
    });
  });
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Check if the selected answer is correct
  if (selectedOption === currentQuestion.correctAnswer) {
    score++;
  }

  // Move to the next question or end the quiz if all questions are answered
  currentQuestionIndex++;

  if (currentQuestionIndex < quizQuestions.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;

    // Update the timer text
    document.getElementById("timer").textContent = timeLeft;

    // End the quiz if time runs out
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

// Function to end the quiz
function endQuiz() {
  // Stop the timer
  clearInterval(timerInterval);

  // Calculate the score percentage
  const scorePercentage = (score / quizQuestions.length) * 100;

  // Display the final score
  const questionContainer = document.getElementById("question-container");
  questionContainer.innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score} out of ${quizQuestions.length}</p>
    <p>Score Percentage: ${scorePercentage}%</p>
  `;
}

// Add event listener to start the quiz when the start button is clicked
document.getElementById("start-button").addEventListener("click", startQuiz);