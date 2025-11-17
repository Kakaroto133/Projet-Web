document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne l'image du menu hamburger
    const hamburger = document.querySelector('.hamburger-menu');
    // Sélectionne la balise de navigation
    const nav = document.querySelector('.navigation-principale');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            // Bascule la classe 'active' sur la navigation
            // La classe 'active' est celle qui affiche le menu en CSS
            nav.classList.toggle('active');
        });
    }
});
