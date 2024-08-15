/*-------------------ICONO COLAPSABLE----------------------*/
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".menu-toggle");
  const menuNavegar = document.querySelector(".menuNavegar");
  const menuLinks = document.querySelectorAll(".menu-items li a");

  // Función para alternar la visibilidad del menú
  toggleButton.addEventListener("click", () => {
    menuNavegar.classList.toggle("active");
  });

  // Manejar el clic en los enlaces del menú
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuNavegar.classList.remove("active");
    });
  });
});

/*-------------------HERO CARRUSEL----------------------*/
let currentIndex = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".nav-dot");

function currentSlide(index) {
  currentIndex = index - 1;
  updateSlide();
}

function updateSlide() {
  slides.style.marginLeft = `-${currentIndex * 100}%`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % dots.length;
  updateSlide();
}

setInterval(autoSlide, 5000); // Cambia de imagen cada 1 segundo
