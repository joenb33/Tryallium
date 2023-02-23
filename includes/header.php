<!DOCTYPE html>
<html>
  <head>
    <script>
      var _paq = window._paq = window._paq || [];
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="https://tracker.mattitja.com/";
        _paq.push(['setTrackerUrl', u+'matomo.php']);
        _paq.push(['setSiteId', '29']);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true;
        g.src=u+'matomo.js';
        s.parentNode.insertBefore(g,s);
      }
      )();
    </script>
    <noscript>
      <p>
        <img src="https://tracker.mattitja.com/matomo.php?idsite=29&amp;rec=1" style="border:0;" alt="" />
      </p>
    </noscript>
    <meta charset="utf-8">
  <title><?php echo $pageTitle; ?></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="<?php echo $pageDescription; ?>">
  <meta name="keywords" content="<?php echo $pageKeywords; ?>">
  <meta name="author" content="<?php echo $pageAuthor; ?>">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="stylesheet" href="/assets/css/header-style.css">
  <link rel="stylesheet" href="/assets/css/footer-style.css">
  <link rel="stylesheet" href="/assets/css/<?php echo $pageName; ?>-style.css">
  <script src="/assets/js/header-script.js"></script>
  </head>
  <body>
  <header>
  <div class="logo">
  <a href="/">
    <img src="/assets/images/logo.png" alt="My Website Logo">
  </a>
</div>
<nav>
  <ul class="nav-links">
    <li class="dropdown">
      <a href="#">Projects</a>
      <ul class="dropdown-content">
        <li><a href="/pages/quote-generation">Quote Generator</a></li>
        <li><a href="/pages/ps-challenge">Graphic Design Assignments Generator</a></li>
        <li><a href="/pages/random-api">Random API Calls</a></li>
        <li><a href="/pages/number-game">Number Game</a></li>
        <li><a href="/pages/guess-age">Guess my age</a></li>
      </ul>
    </li>
    <li><a href="/pages/about">About</a></li>
    <li><a href="/pages/contact">Contact</a></li>
  </ul>
</nav>
</header>
    <main>