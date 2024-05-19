
let jsontext = JSON.stringify([
  {
    "boot_process": {
      "timestamp": "2024-05-18 00:00:00",
      "bios": {
        "vendor": "American Megatrends Inc.",
        "version": "F15",
        "date": "2022-08-01"
      },
      "kernel": {
        "version": "5.19.0-01000-generic",
        "modules": [
          { "name": "loop", "status": "Loaded" },
          { "name": "dm_mod", "status": "Loaded" },
          { "name": "ext4", "status": "Loaded" },
          { "name": "i915", "status": "Loaded" },
          { "name": "xfs", "status": "Loaded" }
        ]
      },
      "filesystem": {
        "devices": [
          {
            "device": "/dev/sda1",
            "type": "ext4",
            "status": "mounted",
            "fsck": {
              "result": "clean",
              "last_checked": "2024-05-17 12:00:00"
            }
          },
          {
            "device": "/dev/sdb",
            "type": "swap",
            "status": "mounted"
          },
          {
            "device": "/dev/sdc1",
            "type": "xfs",
            "status": "mounted",
            "fsck": {
              "result": "clean",
              "last_checked": "2024-05-16 08:30:00"
            }
          }
        ]
      },
      "services": [
        {
          "name": "rsyslogd",
          "status": "running",
          "pid": 1,
          "start_time": "2024-05-18 00:00:10"
        },
        {
          "name": "atd",
          "status": "running",
          "pid": 2,
          "start_time": "2024-05-18 00:00:15"
        },
        {
          "name": "NetworkManager",
          "status": "enabled",
          "details": {
            "interfaces": [
              { "name": "eth0", "status": "active", "ip_address": "192.168.1.100" },
              { "name": "wlan0", "status": "inactive" }
            ]
          }
        },
        {
          "name": "cron",
          "status": "running",
          "pid": 3,
          "start_time": "2024-05-18 00:00:20"
        },
        {
          "name": "sshd",
          "status": "running",
          "pid": 4,
          "start_time": "2024-05-18 00:00:25"
        },
        {
          "name": "nginx",
          "status": "running",
          "pid": 5,
          "start_time": "2024-05-18 00:00:30"
        },
        {
          "name": "mysql",
          "status": "running",
          "pid": 6,
          "start_time": "2024-05-18 00:00:35"
        },
        {
          "name": "docker",
          "status": "running",
          "pid": 7,
          "start_time": "2024-05-18 00:00:40"
        },
        {
          "name": "redis",
          "status": "running",
          "pid": 8,
          "start_time": "2024-05-18 00:00:45"
        },
        {
          "name": "memcached",
          "status": "running",
          "pid": 9,
          "start_time": "2024-05-18 00:00:50"
        }
      ]
    }
  }
]);
let typedText = document.querySelector('.typed')


function textTyping(e, text, i = 0) {
  if (i < text.length) {
    e.textContent = `$ ${text.slice(0, i + 1)} ...`;
    setTimeout(() => textTyping(e, text, i + 1), 1);
  } else {
    // Text typing is complete, start the quiz after a 2-second delay
    setTimeout(() => {
      initializeQuiz();
    }, 2000);
  }
}
textTyping(typedText, jsontext);


/*
let typed = new Typed('#typed', {
  strings: [jsontext],
  typeSpeed: 1,
  backSpeed: 1,
  startDelay: 500,
  backDelay: 1000,
  fadeOut: true,
  loop: false,
  loopCount: 2,
  // showCursor: false
  cursorChar: '...',

  onComplete: function() {

    setTimeout(function() {

      initializeQuiz()

    }, 2000);

  }

});

*/ 





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
const quizSection = document.getElementById("quiz-section");

// Function to create and display a question
function displayQuestion(index) {
  quizSection.innerHTML = ""; // Clear previous content

  if (index < questions.length) {
    const questionObj = questions[index];

    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question-div");

    const questionLabel = document.createElement("label");
    questionLabel.textContent = questionObj.question;
    questionLabel.setAttribute("for", `question-${index}`);

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

    document.body.insertBefore(questionLabel, quizSection);
    questionDiv.appendChild(questionInput);
    questionDiv.appendChild(submitButton);

    quizSection.appendChild(questionDiv);
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


/*
const typedtext = document.querySelector('.typed');

function textTyping (e, text, i = 0 ){
  e.textContent += text[i];
  if(i === text.lenght - 1){
    return;
  }
  setTimeout(()=> textTyping (e, text, i +1 ),50);
}
textTyping(typedtext,jsontext);
*/ 





