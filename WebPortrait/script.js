// ------------------------------
// MENU BURGER POUR MOBILE
// ------------------------------
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// ------------------------------
// ANIMATION LÉGÈRE AU SCROLL (NAVBAR)
// ------------------------------
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.style.background = window.scrollY > 50
    ? 'rgba(15, 15, 16, 0.9)'
    : 'rgba(15, 15, 16, 0.8)';
});

// ------------------------------
// HOBBYS INTERACTIFS
// ------------------------------
const hobbyCards = document.querySelectorAll('.hobby-card');

hobbyCards.forEach(card => {
  const btn = card.querySelector('.hobby-btn');
  const text = card.querySelector('.hobby-text');
  const dataText = card.getAttribute('data-text');

  btn.addEventListener('click', () => {
    const isActive = card.classList.contains('active');

    // Ferme toutes les autres cartes
    hobbyCards.forEach(c => {
      c.classList.remove('active');
      c.querySelector('.hobby-text').textContent = '';
    });

    // Ouvre celle-ci si elle n'était pas active
    if (!isActive) {
      card.classList.add('active');
      text.textContent = dataText;
    }
  });
});

// ------------------------------
// BARRES DE PROGRESSION INTELLIGENCES
// ------------------------------
const progressBars = document.querySelectorAll('.progress-bar span');

const showProgress = () => {
  progressBars.forEach(bar => {
    const progress = getComputedStyle(bar).getPropertyValue('--progress');
    bar.style.width = progress;
  });
};

window.addEventListener('scroll', () => {
  const section = document.querySelector('.intelligence-grid');
  if (!section) return; // Sécurité si la section n'existe pas
  const sectionPos = section.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;
  if (sectionPos < screenPos) showProgress();
});

// ------------------------------
// CARTES DÉFAUTS & QUALITÉS
// ------------------------------
const defautCards = document.querySelectorAll('.defaut-card');

defautCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

// ------------------------------
// TIMELINE
// ------------------------------
const timelineItems = document.querySelectorAll('.timeline-item');

const showTimeline = () => {
  const trigger = window.innerHeight * 0.8;
  timelineItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) item.classList.add('visible');
  });
};

window.addEventListener('scroll', showTimeline);
showTimeline(); // Pour les éléments déjà visibles

// ------------------------------
// PORTRAIT CHINOIS INTERACTIF + FLIP
// ------------------------------
const portraitCards = document.querySelectorAll('.portrait-card');

portraitCards.forEach(card => {
  card.addEventListener('click', (e) => {
    // Flip
    card.classList.toggle('flipped');

    // Mise en avant (active)
    portraitCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    e.stopPropagation(); // Évite que le clic se propage au document
  });
});

// Cliquer ailleurs pour désactiver les cartes Portrait Chinois
document.addEventListener('click', () => {
  portraitCards.forEach(c => c.classList.remove('active'));
});
