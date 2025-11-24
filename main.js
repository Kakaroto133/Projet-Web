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

    // charger le thème (localstorage ou preference systeme)
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // applique le thème sombre par défaut si le système le préfère
        applyTheme('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        applyTheme('light');
    }


    // écouteur de clic pour changer le thème
    if (themeToggle) {
        themeToggle.style.cursor = 'pointer'; 
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                // passage en mode clair
                applyTheme('light');
                localStorage.setItem('theme', 'light');
            } else {
                // passage en mode sombre
                applyTheme('dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});