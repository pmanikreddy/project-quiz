const quizData = [
    {
        question: "What is 2 + 2?",
        choices: ["3", "4", "5", "6"],
        answer: 1
    },
    {
        question: "Which is a vowel?",
        choices: ["b", "a", "z", "r"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionData = quizData[currentQuestion];
    document.getElementById("question").innerText = questionData.question;

    const buttons = document.querySelectorAll(".choice");
    buttons.forEach((btn, index) => {
        btn.innerText = questionData.choices[index];
        btn.disabled = false;
        btn.classList.remove('correct', 'incorrect');
    });
}

function selectAnswer(choice) {
    const questionData = quizData[currentQuestion];
    const buttons = document.querySelectorAll(".choice");

    if (choice === questionData.answer) {
        buttons[choice].classList.add('correct');
        score++;
    } else {
        buttons[choice].classList.add('incorrect');
        buttons[questionData.answer].classList.add('correct');
    }

    buttons.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").style.display = "none";
        document.getElementById("next").style.display = "none";
        document.getElementById("score-container").style.display = "block";
        document.getElementById("score").innerText = score;
    }
}

// Initialize the quiz
loadQuestion();
