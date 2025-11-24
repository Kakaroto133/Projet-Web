document.addEventListener('DOMContentLoaded', () => {
    
    // 1. gestion du menu hamburger
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.navigation-principale');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    // 2. gestion du mode sombre / clair
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // fonction pour appliquer le thème
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    // charger le thème (localstorage)
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        // applique le thème enregistré
        applyTheme(savedTheme);
    } else {
        // charge le mode clair par défaut et l'enregistre
        applyTheme('light');
        localStorage.setItem('theme', 'light');
    }


    // écouteur de clic pour changer le thème
    if (themeToggle) {
        themeToggle.style.cursor = 'pointer'; 
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                // passe en mode clair
                applyTheme('light');
                localStorage.setItem('theme', 'light');
            } else {
                // passe en mode sombre
                applyTheme('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});