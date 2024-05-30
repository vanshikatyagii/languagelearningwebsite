const quizQuestions = [
    {
      question: "What is the German word for 'January'?",
      options: ["Januar", "Februar", "März", "April"],
      correctAnswer: "Januar"
    },
    {
      question: "Wie sagt man 'February' auf Deutsch?",
      options: ["Februar", "Januar", "März", "April"],
      correctAnswer: "Februar"
    },
    {
      question: "Which month is 'März' in English?",
      options: ["March", "May", "June", "July"],
      correctAnswer: "March"
    },
    {
      question: "Was ist der deutsche Name für den Monat 'May'?",
      options: ["Mai", "Juni", "März", "April"],
      correctAnswer: "Mai"
    },
    {
      question: "What month comes after 'August'?",
      options: ["September", "October", "November", "December"],
      correctAnswer: "September"
    },
    {
      question: "Nach welchem Monat kommt 'Oktober'?",
      options: ["September", "August", "November", "Dezember"],
      correctAnswer: "September"
    },
    {
      question: "Welcher Monat ist 'Juli' in Englisch?",
      options: ["July", "January", "June", "February"],
      correctAnswer: "July"
    },
    {
      question: "What is the German name for the month 'October'?",
      options: ["Oktober", "November", "Dezember", "September"],
      correctAnswer: "Oktober"
    },
    {
      question: "Welchen Monat gibt es nicht?",
      options: ["Marz", "September", "April", "July"],
      correctAnswer: "Marz"
    },
    {
      question: "Which month is 'Dezember' in English?",
      options: ["December", "November", "October", "January"],
      correctAnswer: "December"
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