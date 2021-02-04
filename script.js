import './style.scss';
// aller directement au chargement de la page :
window.location = '#acceuil';
// --------Animation de deplacement du Menu fixe ------------------
document.querySelector('a[href="#accueil"]').addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection('acceuil');
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

document.querySelector('a[href="#portfolio-graph"]').addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection('portfolio-graph');
});
/* document.querySelector('a[href="#competence-graph"]').addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection('competence-graph');
}); */

const compGraph = document.querySelectorAll('a[href="#competence-graph"]');
console.log(compGraph);
for (const unCompGraph of compGraph) {
  unCompGraph.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSection('competence-graph');
  });
}

/* document.querySelector('a[href="#competence-web"]').addEventListener('click', (e) => {
  e.preventDefault();
  scrollToSection('competence-web');
}); */

const compWeb = document.querySelectorAll('a[href="#competence-web"]');
console.log(compWeb);
for (const unCompWeb of compWeb) {
  unCompWeb.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSection('competence-web');
  });
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  console.log('id', section.offsetTop, section.offsetLeft);
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
