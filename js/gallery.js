// gallery.js
const buttons = document.querySelectorAll('.image-buttons button, .img-btns-sizes button');
const mainImage = document.getElementById('main-image');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const imageSrc = button.getAttribute('data-image');
    mainImage.src = imageSrc;
  });
});
