const quizQuestions = [
    {
      question: "Which of the following is a correct comparative form of 'good'?",
      options: ["Gooder", "Better", "Best", "Goodest"],
      correctAnswer: "Better"
    },
    {
      question: "What is the plural form of 'mouse'?",
      options: ["Mouses", "Mice", "Mouses", "Mices"],
      correctAnswer: "Mice"
    },
    {
      question: "Choose the correct sentence: 'She are happy' or 'She is happy'?",
      options: ["She are happy", "She is happy"],
      correctAnswer: "She is happy"
    },
    {
      question: "Which of the following is a complex sentence?",
      options: ["The sun is shining.", "He loves pizza.", "Although it was raining, they went for a walk.", "The cat sleeps."],
      correctAnswer: "Although it was raining, they went for a walk."
    },
    {
      question: "What part of speech is the word 'beautifully' in the sentence: 'She sings beautifully'?",
      options: ["Adjective", "Noun", "Verb", "Adverb"],
      correctAnswer: "Adverb"
    },
    {
      question: "Choose the correct sentence: 'Its raining outside' or 'It's raining outside'?",
      options: ["Its raining outside", "It's raining outside"],
      correctAnswer: "It's raining outside"
    },
    {
      question: "What is the comparative form of the adjective 'tall'?",
      options: ["Taller", "Tallest", "More tall", "Talliest"],
      correctAnswer: "Taller"
    },
    {
      question: "Identify the predicate in the sentence: 'The dog chased the cat.'",
      options: ["The dog", "Chased", "The cat", "The"],
      correctAnswer: "Chased"
    },
    {
      question: "Which of the following sentences is in the active voice?",
      options: ["The cake was eaten by her.", "She will be invited to the party.", "The story was told by him.", "He wrote a novel."],
      correctAnswer: "He wrote a novel."
    },
    {
      question: "What type of conjunction is 'although' in the sentence: 'Although it was cold, she went outside'?",
      options: ["Coordinating", "Correlative", "Subordinating", "None of the above"],
      correctAnswer: "Subordinating"
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