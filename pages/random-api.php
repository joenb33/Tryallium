<?php
$pageTitle = "Random API | A Wacky Collection of Fun API Requests";
$pageDescription = "Get ready for some wild and wacky API requests, loaded with jokes, fun facts, and more! Explore our website and experience the fun of our random API reques";
$pageKeywords = "API, API requests, fun facts, jokes, dog breeds, Kanye West quotes";
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