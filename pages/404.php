<?php
$pageTitle = "404 | Page Not Found";
$pageDescription = "This is the description of my subpage.";
$pageKeywords = "subpage, keywords, SEO";
$pageAuthor = "Joen";
$pageName = "404";
include("../includes/header.php");
?>
<div class="error-container">
      <div class="error-box">
        <h1>404: Page Not Found</h1>
        <p>Whoops! It looks like the page you were looking for has gone missing. Don't worry though, it's probably just hiding!</p>
        <img src="https://media.giphy.com/media/10rOuR0y7rzr0Q/giphy.gif" alt="Page not found">
        <p>Try searching for it or go back to the <a href="/">home page</a>. </p>
      </div>
    </div>
    <?php
include("../includes/footer.php");
?>