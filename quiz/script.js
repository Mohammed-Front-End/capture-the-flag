const username = localStorage.getItem('username');
const typedText = document.getElementById('typed');

console.time("concatenation")
function textTyping(e, text, i = 0) {
  const ip = '@10.10.10.10';
  if (i < text.length) {
    e.textContent = `ssh  ${text.slice(0, i + 1)}`;
    setTimeout(() => textTyping(e, text, i + 1), 200);
    
  } else if (i < text.length + ip.length) {
    e.textContent = `ssh ${text}${ip.slice(0, i - text.length + 1)}`;
    setTimeout(() => textTyping(e, text, i + 1), 200);
  } else {
    setTimeout(() => {
      const success = document.createElement('span');
      success.textContent = 'success';
      success.classList.add('success');
      e.appendChild(success)
    }, 1100);
    setTimeout(() => {
      initializeQuiz();
    }, 3500);
  }
}
textTyping(typedText, username);


function initializeQuiz() {
  const questions = [
    {
      question: "What is the capital of France?",
      answer: "Paris"
    },
    {
      question: "What is 2 + 2?",
      answer: "4"
    },
    {
      question: "What is the color of the sky?",
      answer: "blue"
    }
  ];

let currentQuestionIndex = 0;
const quizSection = document.querySelector(".quiz-section");

function displayQuestion(index) {
  quizSection.innerHTML = ""; // Clear previous content
  quizSection.classList.add("clearStyle");

  if (index < questions.length) {
    const questionObj = questions[index];

    const logout = document.createElement("button");
    logout.setAttribute("id", 'logout-btn');
    logout.textContent = "Log Out"; 

    const questionLabel = document.createElement("label");
    questionLabel.textContent = questionObj.question;
    questionLabel.setAttribute("for", `question-${index}`);

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-div");

    const questionInput = document.createElement("input");
    questionInput.setAttribute("type", "text");
    questionInput.setAttribute("id", `question-${index}`);
    questionInput.setAttribute("name", `question-${index}`);
    questionInput.setAttribute("class", `answer`);

    questionInput.focus()
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      checkAnswer(index, questionInput.value);
    });

    document.body.appendChild(logout)
    document.body.insertBefore(questionLabel, quizSection);
    questionDiv.appendChild(questionInput);
    questionDiv.appendChild(submitButton);
    quizSection.appendChild(questionDiv);

    logout.addEventListener('click', function() {
      localStorage.removeItem('username');
      window.location.href = '../LoginPage/index.html';
    });
  } else {
      // All questions answered
      quizSection.innerHTML = "<p>Congratulations! You've completed the quiz.</p>";
    }
  }

// Function to check the answer
function checkAnswer(index, answer) {
  if (answer.toLowerCase() === questions[index].answer.toLowerCase()) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  } else {
    alert("Incorrect answer. Try again.");
  }
}

  // Display the first question
displayQuestion(currentQuestionIndex);
}

console.timeEnd("concatenation")


