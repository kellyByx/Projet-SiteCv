import './style.scss';

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

// --------Animation Image de la page Acceuil ------------------

// test de l'animation des 2 images pour la page d'accueil dans un fichier séparé:
const picturesContainerLeft = document.getElementsByClassName('picture-curtain')[0].getClientRects()[0].left;
const foregroundPicture = document.getElementsByClassName('foreground-picture-container')[0];

function curtainEffect(foregroundPictureWidth) {
  // do following for Method-1 only to use percentage
  // foregroundPictureWidth = foregroundPictureWidth / 5;
  // foregroundPicture.style.width = foregroundPictureWidth + '%';

  // do following for both Method-1 and Method-2
  foregroundPicture.style.width = `${foregroundPictureWidth}px`;
}

function curtainEffectHandler(e) {
  window.requestAnimationFrame((timestamp) => {
    // Method - 1
    // ----------
    curtainEffect(e.clientX - picturesContainerLeft);

    // Method - 2
    // ----------
    // this simplest way is to use the x offset from container (element responsible for the event)
    // uncooment the pixel value scenario in curtainEffect()
    // curtainEffect(e.offsetX);
  });
}
document.querySelector('.picture-curtain').addEventListener('mouseenter', curtainEffectHandler);
document.querySelector('.picture-curtain').addEventListener('mousemove', curtainEffectHandler);
document.querySelector('.picture-curtain').addEventListener('mouseleave', curtainEffectHandler);
