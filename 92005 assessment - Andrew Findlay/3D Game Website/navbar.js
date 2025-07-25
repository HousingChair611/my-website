const navbar = document.getElementById('navbar');
const openNavbarBtn = document.getElementById('openNavbarBtn');
openNavbarBtn.addEventListener('click', (e) => {  e.stopPropagation();  navbar.classList.add('active');  openNavbarBtn.classList.add('navbar-open');});
document.addEventListener('click', () => {  navbar.classList.remove('active');  openNavbarBtn.classList.remove('navbar-open');});
navbar.addEventListener('click', (e) => {  e.stopPropagation();});