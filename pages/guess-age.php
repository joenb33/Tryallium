<?php
$pageTitle = "Guess my age | Get an Estimated Age for Any Name";
$pageDescription = "Try our fun service and enter a name to get an estimated age. It's quick, easy, and completely free!";
$pageKeywords = "guess my age, estimated age, name age calculator, fun service, free service";
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