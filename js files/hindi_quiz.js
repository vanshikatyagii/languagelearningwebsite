const quizQuestions = [
    {
      question: "What is the Hindi word for 'sun'?",
      options: ["सूरज (Surya)", "चाँद (Chand)", "तारा (Tara)", "पृथ्वी (Prithvi)"],
      correctAnswer: "सूरज (Surya)"
    },
    {
      question: "What is the translation of 'good morning' in Hindi?",
      options: ["शुभ प्रभात (Shubh Prabhat)", "शुभ रात्रि (Shubh Ratri)", "नमस्ते (Namaste)", "अलविदा (Alvida)"],
      correctAnswer: "शुभ प्रभात (Shubh Prabhat)"
    },
    {
      question: "Which of the following means 'to drink' in Hindi?",
      options: ["चलना (Chalna)", "सोना (Sona)", "पीना (Peena)", "खाना (Khana)"],
      correctAnswer: "पीना (Peena)"
    },
    {
      question: "What is the Hindi word for 'moon'?",
      options: ["चाँद (Chand)", "सूरज (Surya)", "तारा (Tara)", "ग्रह (Grah)"],
      correctAnswer: "चाँद (Chand)"
    },
    {
      question: "Which option means 'thank you' in Hindi?",
      options: ["धन्यवाद (Dhanyavad)", "अलविदा (Alvida)", "नमस्ते (Namaste)", "कृपया (Kripya)"],
      correctAnswer: "धन्यवाद (Dhanyavad)"
    },
    {
      question: "What does 'शिक्षक' mean in English?",
      options: ["Student", "Teacher", "Book", "School"],
      correctAnswer: "Teacher"
    },
    {
      question: "Which of the following means 'to sleep' in Hindi?",
      options: ["चलना (Chalna)", "खाना (Khana)", "सोना (Sona)", "बोलना (Bolna)"],
      correctAnswer: "सोना (Sona)"
    },
    {
      question: "What is the translation of 'cat' in Hindi?",
      options: ["बिल्ली (Billi)", "कुत्ता (Kutta)", "गाय (Gaay)", "हाथी (Haathi)"],
      correctAnswer: "बिल्ली (Billi)"
    },
    {
      question: "Which option means 'excuse me' in Hindi?",
      options: ["माफ़ कीजिए (Maaf kijiye)", "अलविदा (Alvida)", "नमस्ते (Namaste)", "धन्यवाद (Dhanyavad)"],
      correctAnswer: "माफ़ कीजिए (Maaf kijiye)"
    },
    {
      question: "What does 'गाना' mean in English?",
      options: ["Song", "Dance", "Book", "Pen"],
      correctAnswer: "Song"
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