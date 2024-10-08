// Existing JavaScript ...
// const axios = require('axios');

// axios.get('./exercisedata/exercises.json') {
//     then.response(
//         console.log(response)
//     )
// }

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
let responses = {};

function nextQuestion(selectedOption) {
    const questionContainer = document.getElementById("question-container");

    // Store the user's response
    if (currentQuestionIndex === 0) {
        responses.gender = selectedOption;
    } else if (currentQuestionIndex === 1) {
        responses.age = selectedOption;
    } else if (currentQuestionIndex === 2) {
        responses.goal = selectedOption;
    }

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
        provideOutcome();
    }
}

function provideOutcome() {
    let recommendation = "";

    // Evaluating responses to provide a recommendation
    if (responses.goal === "Losing weight") {
        if (responses.age === "Under 18" || responses.age === "18-25") {
            recommendation = "As a young individual looking to lose weight, we recommend a program focused on cardio exercises and a balanced diet.";
        } else if (responses.age === "26-35" || responses.age === "36-45") {
            recommendation = "For adults aiming to lose weight, we suggest a mix of cardio and strength training exercises, coupled with a nutritious, calorie-controlled diet.";
        } else {
            recommendation = "For older adults, a combination of low-impact cardio and strength training, along with a healthy diet, can help achieve weight loss goals.";
    }
    } else if (responses.goal === "Gain Muscle and Size") {
        if (responses.age === "Under 18" || responses.age === "18-25") {
            recommendation = "To gain muscle, young individuals should focus on high-protein diets and structured weightlifting programs.";
        } else if (responses.age === "26-35" || responses.age === "36-45") {
            recommendation = "Adults should engage in consistent strength training and maintain a protein-rich diet to build muscle effectively.";
        } else {
            recommendation = "Older adults should combine moderate weightlifting with a nutrient-dense diet to safely gain muscle.";
    }
    } else if (responses.goal === "Functional Training") {
        recommendation = "Functional training improves overall fitness. Engage in exercises that mimic daily activities and focus on enhancing core strength.";
    }

    // Display the recommendation
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <div class="question-box">
            <p>Based on your responses, here's our recommendation:</p>
            <p>${recommendation}</p>
        </div>
    `;
    // main.js
    document.addEventListener("DOMContentLoaded", () => {
        fetch('exercisedata/exercises.json')
            .then(response => response.json())
            .then(data => {
                // Now you have access to the JSON data
                const exercises = data.exercises;
                
                const userGender = "Male";
                const userAge = 25;
                const userGoals = "Muscle Gain";
    
                function getAgeRange(age) {
                    if (age <= 30) return "18-30";
                    if (age <= 50) return "31-50";
                    return "51+";
                }
    
                function getWorkoutPlan(gender, age, goals) {
                    const ageRange = getAgeRange(age);
                    const ageExercises = exercises.age[ageRange];
                    const filteredExercises = ageExercises.filter(exercise => 
                        exercise.gender.includes(gender) && 
                        exercise.goals.includes(goals)
                    );
    
                    return filteredExercises;
                }
    
                const workoutPlan = getWorkoutPlan(userGender, userAge, userGoals);
    
                // Display the workout plan to the user
                function displayWorkoutPlan(plan) {
                    let planHtml = "";
                    plan.forEach(exercise => {
                        planHtml += `<div class="exercise-box">
                                        <h2>${exercise.name}</h2>
                                        <p>${exercise.description}</p>
                                     </div>`;
                    });
    
                    document.getElementById("questionContainer").innerHTML = planHtml;
                }
    
                
                displayWorkoutPlan(workoutPlan);
            })
            // .catch(error => console.error('Error loading JSON:', error));
    });
}

