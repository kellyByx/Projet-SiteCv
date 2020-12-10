import './style.scss';

// --------Animation de deplacement du Menu fixe ------------------
document.querySelector('a[href="#accueil"]').addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection('acceuil');
});
document.querySelector('a[href="#competence-web"]').addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection('competence-web');
});
document.querySelector('a[href="#portfolio-web"]').addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection('portfolio-web');
});
document.querySelector('a[href="#parcours"]').addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection('parcours');
});
document.querySelector('a[href="#contact"]').addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection('contact');
});
document.querySelector('a[href="#competence-graph"]').addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection('competence-graph');
});

document.querySelector('a[href="#portfolio-graph"]').addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection('portfolio-graph');
});
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      left: section.offsetLeft,
      behavior: 'smooth',
    });
  } else {
    console.error(`l'id ${id} n'existe pas, scroll impossible`);
  }
}

// --------Animation Image de la page Acceuil ------------------

/* const slider = document.getElementById('slide');
window.onmousemove = function (e) {
  const x = e.clientX;
  slider.style.left = `${x}px;`;
};

*/
