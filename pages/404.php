<?php
$pageTitle = "404 | Page Not Found";
$pageDescription = "This is the custom 404 error page for our website. It means the page you were looking for is not available, but don't worry, you can try searching for it or go back to the home page.";
$pageKeywords = "page not found, error 404, 404, custom error page, website not working";
$pageAuthor = "Joen";
$pageName = "404";
include("../includes/header.php");
?>
<div class="error-container">
  <div class="error-box">
    <h1>404: Page Not Found</h1>
    <p>Whoops! It looks like the page you were looking for has gone missing. Don't worry though, it's probably just hiding!</p>
    <img id="error-image" alt="Page not found">
    <p>Try searching for it or go back to the <a href="/">home page</a>.</p>
  </div>
</div>
<?php
include("../includes/footer.php");
?>