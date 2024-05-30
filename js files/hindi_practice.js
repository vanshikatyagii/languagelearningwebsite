const quizQuestions = [
    {
      question: "What is the Hindi word for 'water'?",
      options: ["पानी (Paani)", "आग (Aag)", "हवा (Hawa)", "मिट्टी (Mitti)"],
      correctAnswer: "पानी (Paani)"
    },
    {
      question: "What is the translation of 'hello' in Hindi?",
      options: ["नमस्ते (Namaste)", "अलविदा (Alvida)", "धन्यवाद (Dhanyavad)", "कृपया (Kripya)"],
      correctAnswer: "नमस्ते (Namaste)"
    },
    {
      question: "Which of the following means 'to eat' in Hindi?",
      options: ["गाना (Gaana)", "पीना (Peena)", "खाना (Khana)", "सोना (Sona)"],
      correctAnswer: "खाना (Khana)"
    },
    {
      question: "What is the Hindi word for 'book'?",
      options: ["किताब (Kitaab)", "पत्थर (Patthar)", "कागज (Kaagaz)", "घर (Ghar)"],
      correctAnswer: "किताब (Kitaab)"
    },
    {
      question: "Which option means 'goodbye' in Hindi?",
      options: ["नमस्ते (Namaste)", "अलविदा (Alvida)", "धन्यवाद (Dhanyavad)", "कृपया (Kripya)"],
      correctAnswer: "अलविदा (Alvida)"
    },
    {
      question: "What does 'धन्यवाद' mean in English?",
      options: ["Hello", "Goodbye", "Please", "Thank you"],
      correctAnswer: "Thank you"
    },
    {
      question: "Which of the following means 'to speak' in Hindi?",
      options: ["सुनना (Sunna)", "बोलना (Bolna)", "लिखना (Likna)", "चलना (Chalna)"],
      correctAnswer: "बोलना (Bolna)"
    },
    {
      question: "What is the translation of 'dog' in Hindi?",
      options: ["बिल्ली (Billi)", "कुत्ता (Kutta)", "चिड़िया (Chidiya)", "गाय (Gaay)"],
      correctAnswer: "कुत्ता (Kutta)"
    },
    {
      question: "Which option means 'how are you?' in Hindi?",
      options: ["तुम कैसे हो? (Tum kaise ho?)", "क्या हाल है? (Kya haal hai?)", "कितना है? (Kitna hai?)", "अच्छा है (Accha hai)?"],
      correctAnswer: "क्या हाल है? (Kya haal hai?)"
    },
    {
      question: "What does 'किताब' mean in English?",
      options: ["Book", "Car", "House", "Dog"],
      correctAnswer: "Book"
    }
];
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