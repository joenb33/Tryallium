// Declare a variable to store the random number
var number = Math.floor(Math.random() * 100) + 1;

// Declare a variable to store the number of attempts
var attempts = 0;

// Get a reference to the form element and attach a submit event listener
var form = document.querySelector("form");
form.addEventListener("submit", guessNumber);

// Declare a function to handle the form submission
function guessNumber(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the user's guess from the input element
  var guessInput = document.getElementById("guess");
  var guess = parseInt(guessInput.value);

  // Get a reference to the output element
  var resultOutput = document.getElementById("result");

  // Declare a variable to store the result message
  var result = "";

  // Check if the user's guess is a valid number
  if (isNaN(guess)) {
    result = "Please enter a valid number!";
  } else if (guess < 1 || guess > 100) {
    result = "Please enter a number between 1 and 100!";
  } else if (guess === number) {
    result = "Congratulations! You guessed the number in " + attempts + " tries!";
    gameOver();
  } else if (guess < number) {
    result = "Too low! Guess again.";
    attempts++;
  } else if (guess > number) {
    result = "Too high! Guess again.";
    attempts++;
  }

  // Display the result message in the output element
  resultOutput.textContent = result;

  // Clear the input element and set the focus back to it
  guessInput.value = "";
  guessInput.focus();
}

// Declare a function to perform any cleanup or additional actions after the user has correctly guessed the number
function gameOver() {
  // TODO: Define this function to perform any necessary cleanup or additional actions
}
