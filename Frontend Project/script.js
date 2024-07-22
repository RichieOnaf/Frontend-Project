// Get the hamburger icon and sidebar menu
const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

// Add event listener to hamburger icon
hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  hamburger.classList.toggle('active');
});

// Add event listener to sidebar menu items
sidebar.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
    hamburger.classList.remove('active');
  });
});