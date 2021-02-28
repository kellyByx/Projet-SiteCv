import { affichesView } from './src/views/portfolioGraph/affiches';
import { logoView } from './src/views/portfolioGraph/logo';
import { typographieView } from './src/views/portfolioGraph/typographies';
import { tfeView } from './src/views/portfolioGraph/tfe';
import { photosView } from './src/views/portfolioGraph/photos';
import { plusView } from './src/views/portfolioGraph/plus';
import { projet1View } from './src/views/portfolioDev/projet1';
import { projet2View } from './src/views/portfolioDev/projet2';
import { projet3View } from './src/views/portfolioDev/projet3';
import { projet4View } from './src/views/portfolioDev/projet4';
import { projet5View } from './src/views/portfolioDev/projet5';
import { projet6View } from './src/views/portfolioDev/projet6';
import { projet7View } from './src/views/portfolioDev/projet7';
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

// -------- switch portfolio ------------------

// portfolio developer= a gauche
const portfolioDeveloper = document.getElementById('portfolioDeveloper');
// const portfolioDeveloper = document.querySelector('portfolioDev');
const links = document.querySelectorAll('.btn-proj-dev');
console.log(links);

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = e.target.matches.id;// e.currentTarget.id; // link.id;
    if (id === 'nav-projet1') {
      portfolioDeveloper.innerHTML = projet1View;
    } else if (id === 'nav-projet2') {
      portfolioDeveloper.innerHTML = projet2View;
    } else if (id === 'nav-projet3') {
      portfolioDeveloper.innerHTML = projet3View;
    } else if (id === 'nav-projet4') {
      portfolioDeveloper.innerHTML = projet4View;
    } else if (id === 'nav-projet5') {
      portfolioDeveloper.innerHTML = projet5View;
    } else if (id === 'nav-projet6') {
      portfolioDeveloper.innerHTML = projet6View;
    } else if (id === 'nav-projet7') {
      portfolioDeveloper.innerHTML = projet7View;
    }
  });
});

// porfolio graphisme = a droite:
const portfolioGraphisme = document.getElementById('portfolioGraphisme');
// const portfolioGraphisme = document.querySelector('portfolioGraphisme');
const liens = document.querySelectorAll('.test1');
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
