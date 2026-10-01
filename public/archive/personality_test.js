// Questions with answer options
const questions = [
    {
      question: "Do you enjoy working with details and data?",
      options: [
        { text: "Absolutely, I love diving into details.", score: 1 },
        { text: "I can handle details if needed.", score: 0 }
      ]
    },
    {
      question: "How do you feel about solving complex problems?",
      options: [
        { text: "I find complex problems exciting!", score: 1 },
        { text: "I can handle challenges well.", score: 0 }
      ]
    },
    {
      question: "Do you prefer structured tasks or open-ended creativity?",
      options: [
        { text: "I prefer structured, analytical tasks.", score: 1 },
        { text: "I enjoy a balance of both.", score: 0 }
      ]
    },
    {
      question: "Are you comfortable working independently on detailed tasks?",
      options: [
        { text: "Yes, I enjoy working independently on focused tasks.", score: 1 },
        { text: "I can work independently when needed.", score: 0 }
      ]
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options");
  const resultContainer = document.getElementById("result");
  
  // Function to render a question and its options
  function renderQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
  
    currentQuestion.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option.text;
      button.onclick = () => {
        score += option.score;
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          renderQuestion();
        } else {
          displayResult();
        }
      };
      optionsContainer.appendChild(button);
    });
  }
  
  // Function to display the result
  function displayResult() {
    questionText.style.display = "none";
    optionsContainer.style.display = "none";
    resultContainer.style.display = "block";
  
    if (score >= 3) {
      resultContainer.innerHTML = `
        <h3>Your Results:</h3>
        <p>You have the analytical and detail-oriented qualities that make you a great fit for data-related roles! Consider exploring careers in data analysis, data science, or business intelligence.</p>
      `;
    } else {
      resultContainer.innerHTML = `
        <h3>Your Results:</h3>
        <p>You have fantastic skills that can thrive in many areas! While data-related roles are an option, your versatility also makes you suitable for various other paths where creativity and balance are valued.</p>
      `;
    }
  }
  
  // Start the test
  renderQuestion();
  