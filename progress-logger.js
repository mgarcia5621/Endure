document.getElementById('add-exercise-btn').addEventListener('click', function() {
    const exerciseList = document.getElementById('exercise-list');
    const newExercise = document.createElement('div');
    newExercise.innerHTML = `
        <input type="text" placeholder="Exercise Name" />
        <input type="number" placeholder="Weight" />
        <input type="number" placeholder="Reps" />
        <input type="number" placeholder="Sets" />
        <button onclick="removeExercise(this)">Remove</button>
    `;
    exerciseList.appendChild(newExercise);
});

function removeExercise(button) {
    button.parentElement.remove();
}