<?php
$pageTitle = "Prompt Generator | Generate Creative Writing Prompts";
$pageDescription = "Get creative writing prompts with our prompt generator. Simply click the button to generate a new prompt and get your imagination flowing.";
$pageKeywords = "prompt generator, creative writing prompts, writing exercises, writing challenges, writing inspiration";
$pageAuthor = "Joen";
$pageName = "ps-challenge";
include("../includes/header.php");
?>
        <h1>Prompt Generator</h1>
        <p>Click the button to generate a prompt:</p>
        <button id="generate-button">Generate Prompt</button>
        <div id="prompt-container"></div>
<?php
include("../includes/footer.php");
?>