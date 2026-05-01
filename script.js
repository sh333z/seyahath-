const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const track = document.querySelector(".carousel-track");
let cards = document.querySelectorAll(".card");

let index = 2;

/* CLONE for infinite loop */
track.appendChild(cards[0].cloneNode(true));
track.appendChild(cards[1].cloneNode(true));
track.prepend(cards[cards.length - 1].cloneNode(true));

cards = document.querySelectorAll(".card");

function updateCarousel() {
  cards.forEach(card => card.classList.remove("active"));
  cards[index].classList.add("active");

  const container = document.querySelector(".carousel");
  const containerCenter = container.offsetWidth / 2;

  const card = cards[index];
  const cardCenter = card.offsetLeft + card.offsetWidth / 2;

  const move = containerCenter - cardCenter;

  track.style.transform = `translateX(${move}px)`;
}

/* AUTO SLIDE */
setInterval(() => {
  index++;

  if (index >= cards.length - 1) {
    index = 1;
    track.style.transition = "none";
    updateCarousel();

    setTimeout(() => {
      track.style.transition = "0.5s ease";
    }, 50);
  }

  updateCarousel();
}, 3000);

updateCarousel();
