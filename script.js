// MENU TOGGLE (keep yours)
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


// =======================
// CAROUSEL
// =======================

const track = document.querySelector(".carousel-track");
let cards = document.querySelectorAll(".card");

const visibleCards = 3; // number of visible cards
let index = visibleCards;

// CLONE (for infinite loop)
for (let i = 0; i < visibleCards; i++) {
  track.appendChild(cards[i].cloneNode(true));
  track.prepend(cards[cards.length - 1 - i].cloneNode(true));
}

// reselect after cloning
cards = document.querySelectorAll(".card");


// UPDATE POSITION
function updateCarousel() {
  cards.forEach(card => card.classList.remove("active"));
  cards[index].classList.add("active");

  const cardWidth = 430; // card width (400) + gap (30)
  const centerOffset = (window.innerWidth / 2) - (cardWidth / 2);

  track.style.transform = `translateX(${centerOffset - (index * cardWidth)}px)`;
}


// AUTO SLIDE
setInterval(() => {
  index++;

  // reset loop
  if (index >= cards.length - visibleCards) {
    index = visibleCards;

    track.style.transition = "none";
    updateCarousel();

    setTimeout(() => {
      track.style.transition = "0.5s ease";
    }, 50);
  }

  updateCarousel();
}, 3000);


// INITIAL LOAD
updateCarousel();


// OPTIONAL: fix on resize
window.addEventListener("resize", updateCarousel);
