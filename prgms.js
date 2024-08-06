// Existing JavaScript ...
function openNav() {
    document.getElementById("sidePanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidePanel").style.width = "0";
}

function openNav() {
    document.getElementById("side-panel").style.width = "250px";
}

function closeNav() {
    document.getElementById("side-panel").style.width = "0";
}

const questions = [
    {
        question: "What is your gender?",
        options: ["Male", "Female"],
    },
    {
        question: "How old are you?",
        options: ["Under 18", "18-25", "26-35", "36-45", "46-55", "56+"],
    },
    {
        question: "What are your goals for this journey?",
        options: ["Losing weight", "Gain Muscle and Size", "Functional Training"],
    },
];

let currentQuestionIndex = 0;

function nextQuestion(selectedOption) {
    const questionContainer = document.getElementById("question-container");
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        const nextQuestion = questions[currentQuestionIndex];
        const optionsHTML = nextQuestion.options
            .map(
                (option) => `<button onclick="nextQuestion('${option}')">${option}</button>`
            )
            .join("");
        questionContainer.innerHTML = `
            <div class="question-box">
                <p>${nextQuestion.question}</p>
                ${optionsHTML}
            </div>
        `;
    } else {
        questionContainer.innerHTML = `<div class="question-box"><p>Thank you for your responses!</p></div>`;
    }
}