<?php
$pageTitle = "Number Game | Guess the number the website is thinking of";
$pageDescription = "Play the Number Game, a fun and addictive guessing game where you must guess a randomly generated number between 1 and 100. Styled like a Bash-style window, this web-based game provides feedback after each guess, and continues until you correctly guess the number. Enjoy a unique and fun user experience with this addictive web game.";
$pageKeywords = "number game, guessing game, web game, Bash-style window, addictive game, random number, feedback, web-based game, fun game, unique user experience.";
$pageAuthor = "Joen";
$pageName = "number-game";
include("../includes/header.php");
?>

<div id="output">
      <span class="prompt">$</span> Welcome to the Number Game!
    </div>
    <h1>Guess the Number</h1>
    <p>
    The Number Game is a fun and addictive guessing game where the player must guess a randomly generated number between 1 and 100. <br />
    The game provides feedback to the player after each guess, letting them know if the guess was too high or too low. <br />
    The game continues until the player correctly guesses the number.
    </p>
    <form>
      <label for="guess"><span class="prompt">$</span> Enter your guess:</label>
      <input type="number" id="guess" name="guess" required>
      <button type="submit"><span class="prompt">$</span> Guess</button>
    </form>
    <div id="result"></div>

<?php
include("../includes/footer.php");
?>