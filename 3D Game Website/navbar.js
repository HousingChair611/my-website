/* ===== NAVIGATION FUNCTIONALITY ===== */
/* Get references to DOM elements for navbar interaction */
const navbar = document.getElementById('navbar');
const openNavbarBtn = document.getElementById('openNavbarBtn');

/* ===== EVENT LISTENERS ===== */
/* Open navbar when hamburger button is clicked */
openNavbarBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent event from bubbling up to document
  navbar.classList.add('active'); // Show the navbar
  openNavbarBtn.classList.add('navbar-open'); // Move button with navbar
});

/* Close navbar when clicking anywhere outside of it */
document.addEventListener('click', () => {
  navbar.classList.remove('active'); // Hide the navbar
  openNavbarBtn.classList.remove('navbar-open'); // Move button back to original position
});

/* Prevent navbar clicks from closing the navbar */
navbar.addEventListener('click', (e) => {
  e.stopPropagation(); // Stop click event from reaching document
});