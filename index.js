// galerie.js

function appliquerFiltre(type) {
  const images = document.querySelectorAll('.galerie img');

  images.forEach(img => {
    // Supprime les filtres existants
    img.classList.remove('grayscale', 'blur');

    // Ajoute le filtre sélectionné
    if (type !== 'none') {
      img.classList.add(type);
    }
  });
}
