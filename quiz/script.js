const username = localStorage.getItem('username');
const typedText = document.getElementById('typed');
const detectedOS = document.getElementById('detected-OS');
const quizSection = document.querySelector('.quiz-section');

function textTyping(e, text, i = 0) {
  const ip = '@10.10.10.10';
  const osName = ` Detected OS: ${getOSName()}`;
  const successText = ' success';
  if (i < text.length) {
    e.textContent = `ssh  ${text.slice(0, i + 1)}`;
    setTimeout(() => textTyping(e, text, i + 1), 150);
  } else if (i < text.length + ip.length) {
    e.textContent = `ssh ${text}${ip.slice(0, i - text.length + 1)}`;
    setTimeout(() => textTyping(e, text, i + 1), 150);
  } else if (i < text.length + ip.length + osName.length) {
    detectedOS.textContent = `${osName.slice(0, i - text.length - ip.length + 1)}`;
    setTimeout(() => textTyping(e, text, i + 1), 150);
  } else {
    setTimeout(() => {
      typeSuccess(e, successText);
    }, 1500);
  }
}
textTyping(typedText, username);

function typeSuccess(e, text, i = 0) {
  const success = document.querySelector('.success');
  if (i < text.length) {
    success.textContent = `${text.slice(0, i + 1)}`;
    setTimeout(() => typeSuccess(e, text, i + 1), 150);
  } else {
    setTimeout(() => {
      initializeQuiz();
    }, 3500);
  }
}

function getOSName() {
  let osName = "Not known";
  if (navigator.userAgent.indexOf("Win") != -1) osName = "Windows OS";
  if (navigator.userAgent.indexOf("Mac") != -1) osName = "MacOS";
  if (navigator.userAgent.indexOf("X11") != -1) osName = "UNIX OS";
  if (navigator.userAgent.indexOf("Linux") != -1) osName = "Linux OS";
  if (navigator.userAgent.indexOf("Android") != -1) Name =  "Android OS"; 
  if (navigator.userAgent.indexOf("iPhone") != -1) Name =  "iPhone OS"; 
  return osName;
}

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



