// Define the function to check the user's answer
function checkAnswer() {
    // Get the correct answer
    const correctAnswer = "4";
    
    // Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');
    
    // Check if an option was selected
    if (selectedOption) {
        // Get the user's answer
        const userAnswer = selectedOption.value;
        
        // Compare with correct answer
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        // No option was selected
        feedbackElement.textContent = "Please select an answer!";
        feedbackElement.style.color = "orange";
    }
}

// Add event listener to the submit button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);