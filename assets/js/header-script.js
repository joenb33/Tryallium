const navLinks = document.querySelector('.nav-links');
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-content');


if (dropdown) {
  dropdown.addEventListener('click', () => {
    // toggle the dropdown menu
    dropdownMenu.classList.toggle('open');
    const expanded = dropdown.getAttribute('aria-expanded') === 'true' || false;
    dropdown.setAttribute('aria-expanded', !expanded);
  });
}
