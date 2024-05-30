const quizQuestions = [
    {
      question: "What is the Spanish word for 'house'?",
      options: ["Casa", "Coche", "Libro", "Perro"],
      correctAnswer: "Casa"
    },
    {
      question: "What is the translation of 'hello' in Spanish?",
      options: ["Hola", "Adiós", "Gracias", "Por favor"],
      correctAnswer: "Hola"
    },
    {
      question: "Which of the following means 'to eat' in Spanish?",
      options: ["Bailar", "Cantar", "Comer", "Dormir"],
      correctAnswer: "Comer"
    },
    {
      question: "What is the Spanish word for 'water'?",
      options: ["Fuego", "Aire", "Tierra", "Agua"],
      correctAnswer: "Agua"
    },
    {
      question: "Which option means 'goodbye' in Spanish?",
      options: ["Buenos días", "Buenas noches", "Adiós", "Hasta luego"],
      correctAnswer: "Adiós"
    },
    {
      question: "What does 'gracias' mean in English?",
      options: ["Hello", "Goodbye", "Please", "Thank you"],
      correctAnswer: "Thank you"
    },
    {
      question: "Which of the following means 'to speak' in Spanish?",
      options: ["Comer", "Beber", "Hablar", "Escuchar"],
      correctAnswer: "Hablar"
    },
    {
      question: "What is the translation of 'cat' in Spanish?",
      options: ["Perro", "Gato", "Pájaro", "Caballo"],
      correctAnswer: "Gato"
    },
    {
      question: "Which option means 'how are you?' in Spanish?",
      options: ["¿Qué tal?", "¿Cómo estás?", "¿Cuánto cuesta?", "¿Dónde está?"],
      correctAnswer: "¿Cómo estás?"
    },
    {
      question: "What does 'libro' mean in English?",
      options: ["Book", "Car", "House", "Dog"],
      correctAnswer: "Book"
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