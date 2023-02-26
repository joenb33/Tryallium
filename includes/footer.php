</main>
    <div id="cookie-banner">
      <p>
        Our website uses cookies to track your visits and improve your
        experience. Cookies are small text files that are stored on your device
        when you visit a website.
      </p>
      <p>
        We only use cookies to track how many times you have visited our
        website. This information helps us understand how our site is being used
        and allows us to make improvements to better serve our visitors.
      </p>
      <p>
        We respect your privacy and do not use cookies for any other purposes.
        By using our website, you consent to our use of cookies for the purpose
        of tracking your visits.
      </p>
      <p>
        If you have any questions or concerns about our use of cookies, please
        don't hesitate to contact us!
      </p>
      <button id="cookie-banner-agree">got it</button>
      <button id="cookie-banner-opt-out">Only use vital cookies</button>
    </div>
    <footer class="site-footer">
      <p id="copyright"></p>
      <div id="visit-message"></div>
    </footer>
    <!-- Link to JavaScript file here -->
    <script src="/assets/js/<?php echo $pageName ?>.js"></script>
    <script src="/assets/js/consoleOutput.js"></script>
    <script src="/assets/js/cookie-banner.js"></script>
    <script src="/assets/js/visit-message.js"></script>
    <script>
      const currentYear = new Date().getFullYear();
      const copyright = document.getElementById("copyright");
      copyright.innerHTML = `Joen &copy; ${currentYear}`;
    </script>
  </body>
</html>