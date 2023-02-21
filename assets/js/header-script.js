const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-content');
const links = document.querySelectorAll('.nav-links li');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    // toggle the hamburger menu
    hamburger.classList.toggle('is-active');
    navLinks.classList.toggle('open');
    const expanded = navLinks.getAttribute('aria-expanded') === 'true' || false;
    navLinks.setAttribute('aria-expanded', !expanded);

    // animate the links
    links.forEach(link => {
      link.classList.toggle('fade');
    });

    // toggle the body overflow
    document.body.classList.toggle('no-scroll');
  });
}

if (dropdown) {
  dropdown.addEventListener('click', () => {
    // toggle the dropdown menu
    dropdownMenu.classList.toggle('open');
    const expanded = dropdown.getAttribute('aria-expanded') === 'true' || false;
    dropdown.setAttribute('aria-expanded', !expanded);
  });
}
