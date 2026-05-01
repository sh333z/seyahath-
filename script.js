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

const cardWidth = 410; // 380 + 30 gap
const visibleCards = 3;
let index = visibleCards;

/* CLONE */
for (let i = 0; i < visibleCards; i++) {
  const firstClone = cards[i].cloneNode(true);
  const lastClone = cards[cards.length - 1 - i].cloneNode(true);

  track.appendChild(firstClone);
  track.prepend(lastClone);
}

cards = document.querySelectorAll(".card");

/* INITIAL POSITION */
track.style.transform = `translateX(-${cardWidth * index}px)`;

/* AUTO SLIDE */
setInterval(() => {
  index++;

  track.style.transition = "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)";
  track.style.transform = `translateX(-${cardWidth * index}px)`;

  /* RESET LOOP */
  
  if (index >= cards.length - visibleCards) {
  setTimeout(() => {

    track.style.transition = "none";

    index = index - cards.length + (visibleCards * 2);

    track.style.transform = `translateX(-${cardWidth * index}px)`;

    // 🔥 FORCE browser to apply instantly (important for Chrome)
    track.offsetHeight;

    requestAnimationFrame(() => {
      track.style.transition = "transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)";
    });

  }, 600);
}

}, 3500);
