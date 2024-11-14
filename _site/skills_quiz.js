// Data Science Skills Quiz Program

const questions = [
    {
      question: "1. Which of the following libraries is used for data manipulation in Python?",
      choices: ["TensorFlow", "Pandas", "Seaborn", "NumPy"],
      correctAnswer: 1
    },
    {
      question: "2. What is the purpose of a confusion matrix in machine learning?",
      choices: [
        "To measure the accuracy of a regression model",
        "To compare different regression models",
        "To evaluate classification model performance",
        "To optimize hyperparameters"
      ],
      correctAnswer: 2
    },
    {
      question: "3. Which algorithm is used for dimensionality reduction?",
      choices: ["Linear Regression", "PCA", "K-Means", "Random Forest"],
      correctAnswer: 1
    },
    {
      question: "4. What is the p-value in hypothesis testing?",
      choices: [
        "Probability of rejecting a true null hypothesis",
        "Probability of observing the data given that the null hypothesis is true",
        "The level of significance",
        "None of the above"
      ],
      correctAnswer: 1
    },
    {
      question: "5. Which metric is appropriate for evaluating a classification model?",
      choices: ["RMSE", "R-Squared", "F1 Score", "MAE"],
      correctAnswer: 2
    },
    {
      question: "6. What is an epoch in deep learning?",
      choices: [
        "A single pass through the full training dataset",
        "A single update to the weights",
        "A layer in a neural network",
        "None of the above"
      ],
      correctAnswer: 0
    },
    {
      question: "7. Which technique is used to prevent overfitting in machine learning models?",
      choices: ["Feature Engineering", "Batch Normalization", "Regularization", "Normalization"],
      correctAnswer: 2
    },
    {
      question: "8. Which statement about the K-Means algorithm is correct?",
      choices: [
        "It is a supervised learning algorithm",
        "It requires a predefined number of clusters",
        "It is used for regression problems",
        "None of the above"
      ],
      correctAnswer: 1
    },
    {
      question: "9. What is the primary purpose of a ROC curve?",
      choices: [
        "To determine the optimal hyperparameters",
        "To measure the performance of a regression model",
        "To evaluate the trade-off between sensitivity and specificity",
        "To reduce dimensionality"
      ],
      correctAnswer: 2
    },
    {
      question: "10. Which type of model is commonly used for natural language processing?",
      choices: ["Random Forest", "Convolutional Neural Network", "Recurrent Neural Network", "Support Vector Machine"],
      correctAnswer: 2
    }
  ];
  
  // Initialize quiz variables
  let currentQuestion = 0;
  let score = 0;
  
  // Function to load question
  function loadQuestion() {
    if (currentQuestion < questions.length) {
      const q = questions[currentQuestion];
      document.getElementById("question").textContent = q.question;
      document.getElementById("choice0").textContent = q.choices[0];
      document.getElementById("choice1").textContent = q.choices[1];
      document.getElementById("choice2").textContent = q.choices[2];
      document.getElementById("choice3").textContent = q.choices[3];
    } else {
      showResults();
    }
  }
  
  // Function to check answer
  function checkAnswer(choice) {
    if (choice === questions[currentQuestion].correctAnswer) {
      score++;
    }
    currentQuestion++;
    loadQuestion();
  }
  
  // Function to display results
  function showResults() {
    document.getElementById("quiz-container").innerHTML = `
      <h2>Your Score: ${score} / ${questions.length}</h2>
      <p>${score >= 7 ? "Great job! You have a strong understanding of data science concepts." : "Keep practicing! Consider reviewing key concepts to strengthen your skills."}</p>
    `;
  }
  
  // Load the first question
  document.addEventListener("DOMContentLoaded", loadQuestion);
  
