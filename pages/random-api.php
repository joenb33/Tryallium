<?php
$pageTitle = "Random API | Playing with some APIs";
$pageDescription = "Get inspired with random motivational quotes and tips for success with this AI-powered website.";
$pageKeywords = "motivational quotes, success, AI, ChatGPT, OpenAI, inspiration, positivity, personal growth, self-improvement, life goals, personal development, self-help, achievement, mindset, determination, aspiration";
$pageAuthor = "Joen";
$pageName = "random-api";
include("../includes/header.php");
?>
    <div id="jumbotron">
      <h1>You've entered the Wacky Web!</h1>
      <p>Get ready for some wild and wacky API requests, loaded with jokes, fun facts, and more!</p>
      <a href="#" onclick="makeAPIRequest()">Enter the Wacky Web</a>
    </div>
    <div id="reference" style="display: none;">
      <div class="card">
        <h2 id="api-response-1-title">Chuck Norris Joke</h2>
        <p id="api-response-1"></p>
      </div>
      <div class="card">
        <h2 id="api-response-2-title">Fun Fact</h2>
        <p id="api-response-2"></p>
      </div>
      <div class="card">
        <h2 id="api-response-3-title">Yes or No</h2>
        <p id="api-response-3"></p>
      </div>
      <div class="card">
        <h2 id="api-response-4-title">Random Dog Breed</h2>
        <img id="api-response-4" alt="Random dog breed">
        <p id="api-response-4-breed"></p>
      </div>
      <div class="card">
        <h2 id="api-response-5-title">Kanye West Quote</h2>
        <p id="api-response-5"></p>
      </div>
    </div>
<?php
include("../includes/footer.php");