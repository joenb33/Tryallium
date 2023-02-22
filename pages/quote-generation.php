<?php
$pageTitle = "Quote Generator | Generate fantastic quotes";
$pageDescription = "Get inspired with random motivational quotes and tips for success with this AI-powered website.";
$pageKeywords = "motivational quotes, success, AI, ChatGPT, OpenAI, inspiration, positivity, personal growth, self-improvement, life goals, personal development, self-help, achievement, mindset, determination, aspiration";
$pageAuthor = "Joen";
$pageName = "quote-generation";
include("../includes/header.php");
?>
<div id="quote-box">
        <div id="image-box">
          <img id="image" src="" alt="">
        </div>
        <div id="buttons">
          <button id="new-image">New Image</button>
          <a id="tweet-image" target="_blank">Share Image</a>
        </div>
        <p id="click-tip">Click the image to copy the link to it to your clipboard!</p>
      </div>
<?php
include("../includes/footer.php");
?>
