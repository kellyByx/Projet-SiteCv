import { affichesView } from './src/views/portfolioGraph/affiches';
import { logoView } from './src/views/portfolioGraph/logo';
import { typographieView } from './src/views/portfolioGraph/typographies';
import { tfeView } from './src/views/portfolioGraph/tfe';
import { photosView } from './src/views/portfolioGraph/photos';
import { plusView } from './src/views/portfolioGraph/plus';

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

// changement pour avoir 2 lienspour  graphisme/developper competences.
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

// -------- "switch" portfolio graphisme : img ------------------

// porfolio graphisme = a droite:
const portfolioGraphisme = document.getElementById('portfolioGraphisme');
// const portfolioGraphisme = document.querySelector('portfolioGraphisme');
const liens = document.querySelectorAll('.btn-proj-graph');
console.log(liens);

liens.forEach((lien) => {
  lien.addEventListener('click', (e) => {
    const id = e.currentTarget.id; // lien.id;
    if (id === 'nav-affiches') {
      portfolioGraphisme.innerHTML = affichesView;
    } else if (id === 'nav-typographie') {
      portfolioGraphisme.innerHTML = typographieView;
    } else if (id === 'nav-logo') {
      portfolioGraphisme.innerHTML = logoView;
    } else if (id === 'nav-tfe') {
      portfolioGraphisme.innerHTML = tfeView;
    } else if (id === 'nav-photos') {
      portfolioGraphisme.innerHTML = photosView;
    } else if (id === 'nav-plus') {
      portfolioGraphisme.innerHTML = plusView;
    }
  });
});

// -------- slider/carousel portfolio Developer ------------------

let slideActuelle = 1;
const slides = document.getElementsByClassName('slides');
const puces = document.getElementsByClassName('puce');

// permet de changer de slide au clic d'une puce
function activePuceSlide(slideIndex) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    puces[i].style.color = '#bbb';
  }
  slides[slideIndex - 1].style.display = 'flex';
  puces[slideIndex - 1].style.color = 'rgb(237, 80, 211)';
}

//= >slide a celle actuelle= celle visible
function ObtenirSlideActuelle() {
  for (let i = 0; i < puces.length; i++) {
    if (puces[i].style.color === 'rgb(237, 80, 211)') {
      slideActuelle = i + 1;
    }
  }
  return slideActuelle;
}

function afficherSlide(slideIndex) {
  if (slideIndex > slides.length) {
    slideActuelle = 1;
  }
  if (slideIndex < 1) {
    slideActuelle = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    puces[i].style.color = '#bbb';
  }
  slides[slideActuelle - 1].style.display = 'flex';
  puces[slideActuelle - 1].style.color = ' rgb(237, 80, 211)';
}

function slideSuivante() {
  slideActuelle = ObtenirSlideActuelle();
  afficherSlide((slideActuelle += 1));
}

function slidePrecedente() {
  slideActuelle = ObtenirSlideActuelle();
  afficherSlide((slideActuelle -= 1));
}

window.onload = function () {
  afficherSlide(slideActuelle);
  document.getElementById('retour').addEventListener('click', () => {
    slidePrecedente();
  });
  document.getElementById('suivant').addEventListener('click', () => {
    slideSuivante();
  });
  document.getElementById('puce1').addEventListener('click', () => {
    activePuceSlide(1);
  });
  document.getElementById('puce2').addEventListener('click', () => {
    activePuceSlide(2);
  });
  document.getElementById('puce3').addEventListener('click', () => {
    activePuceSlide(3);
  });
  document.getElementById('puce4').addEventListener('click', () => {
    activePuceSlide(4);
  });
  document.getElementById('puce5').addEventListener('click', () => {
    activePuceSlide(5);
  });
  document.getElementById('puce6').addEventListener('click', () => {
    activePuceSlide(6);
  });
  document.getElementById('puce7').addEventListener('click', () => {
    activePuceSlide(7);
  });
  document.getElementById('puce8').addEventListener('click', () => {
    activePuceSlide(8);
  });
};
