document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------
    // 1. GESTION DU MENU HAMBURGER
    // ------------------------------------------
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.navigation-principale');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // ------------------------------------------
    // 2. GESTION DU MODE SOMBRE / CLAIR
    // ------------------------------------------
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Fonction pour appliquer le thème
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            // Si vous avez deux icônes différentes (lune/soleil), changez la source ici
        } else {
            body.classList.remove('dark-mode');
        }
    }

    // Charger le thème depuis le localStorage ou détecter la préférence du système
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        applyTheme('light');
    }


    // Écouteur d'événement pour le clic sur l'icône
    if (themeToggle) {
        themeToggle.style.cursor = 'pointer'; 
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                // Passage en mode clair
                applyTheme('light');
                localStorage.setItem('theme', 'light');
            } else {
                // Passage en mode sombre
                applyTheme('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});