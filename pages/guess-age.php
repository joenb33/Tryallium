<?php
$pageTitle = "Guess my age | Only imput your name and we guess your age";
$pageDescription = "This is the description of my subpage.";
$pageKeywords = "subpage, keywords, SEO";
$pageAuthor = "Joen";
$pageName = "guess-age";
include("../includes/header.php");
?>

<div class="center">
      <h1>Enter a name to get an estimated age:</h1>
      <div class="input-group">
        <input type="text" id="nameInput" class="form-control" placeholder="Enter a name">
        <button onclick="getAge()" class="btn btn-primary">Get Age</button>
      </div>
    </div>
    <div id="result"></div>

<?php
include("../includes/footer.php");
?>