// script.js
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  
  // Lock or unlock body scroll
  if (sidebar.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  const icon = menuToggle.querySelector('ion-icon');
  icon.setAttribute('name', sidebar.classList.contains('active') ? 'close-outline' : 'menu-outline');
});
