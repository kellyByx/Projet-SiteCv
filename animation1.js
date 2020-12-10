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
    curtainEffect(e.pageX - picturesContainerLeft);

    // Method - 2
    // ----------
    // this simplest way is to use the x offset from container (element responsible for the event)
    // uncooment the pixel value scenario in curtainEffect()
    // curtainEffect(e.offsetX);
  });
}
