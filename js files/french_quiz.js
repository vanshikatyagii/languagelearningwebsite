const quizQuestions = [
  
    {
      question: "Question 1: What does 'bonjour' mean in English?",
      options: ["Thank you", "Goodbye", "Hello", "Excuse me"],
      correctAnswer: "Hello"
    },
    {
      question: "How do you say 'goodbye' in French?",
      options: ["Bonjour", "Merci", "Au revoir", "S'il vous plaît"],
      correctAnswer: "Au revoir"
    },
    {
      question: "What is the translation of 'merci' in French?",
      options: ["Hello", "Goodbye", "Thank you", "Please"],
      correctAnswer: "Thank you"
    },
    {
      question: "How do you say 's'il vous plaît' in English?",
      options: ["Please", "Hello", "Goodbye", "Thank you"],
      correctAnswer: "Please"
    },
    {
      question: "What does 'excusez-moi' mean in English?",
      options: ["Hello", "Goodbye", "Thank you", "Excuse me"],
      correctAnswer: "Excuse me"
    },
    {
      question: "How do you say 'au revoir' in English?",
      options: ["Thank you", "Excuse me", "Goodbye", "Please"],
      correctAnswer: "Goodbye"
    },
    {
      question: "What is the translation of 'salut' in English?",
      options: ["Hello", "Goodbye", "Thank you", "Excuse me"],
      correctAnswer: "Hello"
    },
    {
      question: "How would you say 'bonne journée' in English?",
      options: ["Goodbye", "Have a good day", "Hello", "Excuse me"],
      correctAnswer: "Have a good day"
    },
    {
      question: "What does 'comment ça va?' mean in English?",
      options: ["How are you?", "Thank you", "Goodbye", "Please"],
      correctAnswer: "How are you?"
    },
    {
      question: "How do you say 'thank you' in French?",
      options: ["Bonjour", "Merci", "Au revoir", "S'il vous plaît"],
      correctAnswer: "Merci"
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