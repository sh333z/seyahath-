const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const track = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".card");

let index = 2; // center starts here

function updateCarousel() {
  cards.forEach(card => card.classList.remove("active"));

  cards[index].classList.add("active");

  const offset = cards[index].offsetLeft - (window.innerWidth / 2 - cards[index].offsetWidth / 2);
  track.style.transform = `translateX(-${offset}px)`;
}

/* Auto slide */
setInterval(() => {
  index++;

  if (index >= cards.length) {
    index = 0;
  }

  updateCarousel();
}, 2500);

updateCarousel();
