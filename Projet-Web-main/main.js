document.addEventListener('DOMContentLoaded', () => {

    // ------------------------------------------
    // 1. GESTION DU MENU HAMBURGER (Ton code)
    // ------------------------------------------
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.navigation-principale');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // ------------------------------------------
    // 2. GESTION DU MODE SOMBRE / CLAIR (Ton code)
    // ------------------------------------------
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
    }

    if (themeToggle) {
        themeToggle.style.cursor = 'pointer'; 
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                applyTheme('light');
                localStorage.setItem('theme', 'light');
            } else {
                applyTheme('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // ------------------------------------------
    // 3. ALERTE STOCK ÉPUISÉ (Uniquement Boutique)
    // ------------------------------------------
    // On cible seulement les petites icônes panier dans la grille des produits
    const boutonsAchat = document.querySelectorAll('.icone-panier');

    boutonsAchat.forEach(bouton => {
        bouton.addEventListener('click', () => {
            // Affiche l'alerte sans empêcher la navigation du header
            alert("⚔️ STOCK ÉPUISÉ ! ⚔️");
        });
    });

});