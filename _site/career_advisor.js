// Questions array with options and next steps

const questions = [
    {
      question: "What type of work do you prefer?",
      options: [
        { text: "Analytical & Data-focused", next: 1 },
        { text: "Creative & Design-oriented", next: 2 },
        { text: "Interpersonal & Helping others", next: 3 }
      ]
    },
    {
      question: "Do you enjoy working with numbers and data analysis?",
      options: [
        { text: "Yes, very much", next: 4 },
        { text: "Not really", next: 5 }
      ]
    },
    {
      question: "Do you prefer working on visual or artistic projects?",
      options: [
        { text: "Yes, I love it", next: 6 },
        { text: "I prefer other types of tasks", next: 5 }
      ]
    },
    {
      question: "Do you enjoy engaging with people directly?",
      options: [
        { text: "Yes, working with people is fulfilling", next: 7 },
        { text: "I prefer more independent work", next: 5 }
      ]
    },
    {
      advice: "Consider careers in Data Science, Financial Analysis, or Actuarial Science!"
    },
    {
      advice: "Consider roles like Project Management, Consulting, or Generalist roles!"
    },
    {
      advice: "Consider Graphic Design, UI/UX Design, or Media Production!"
    },
    {
      advice: "Explore Social Work, Counseling, or HR roles that focus on direct interaction!"
    }
  ];
  
  let currentQuestionIndex = 0;
  
  // Reference to HTML elements
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options");
  const resultContainer = document.getElementById("result");
  
  // Function to render a question and its options
  function renderQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option.text;
      button.onclick = () => {
        if ("advice" in questions[option.next]) {
          displayResult(questions[option.next].advice);
        } else {
          currentQuestionIndex = option.next;
          renderQuestion();
        }
      };
      optionsContainer.appendChild(button);
    });
  }
  
  // Function to display final advice
  function displayResult(advice) {
    questionText.style.display = "none";
    optionsContainer.style.display = "none";
    resultContainer.style.display = "block";
    resultContainer.innerHTML = `<h3>Best Advice for You:</h3><p>${advice}</p>`;
  }
  
  // Initialize the first question
  renderQuestion();
  