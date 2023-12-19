document.addEventListener('DOMContentLoaded', () => {
    const portfolioContainer = document.querySelector('.portfolio-container');
    const arrowLeft = document.querySelector('.fa-arrow-left');
    const arrowRight = document.querySelector('.fa-arrow-right');

    arrowLeft.addEventListener('click', () => {
        // Logik für die Verschiebung zur vorherigen Card
        portfolioContainer.scrollBy({
            left: -300, // Ändere dies entsprechend der Breite deiner Cards
            behavior: 'smooth',
        });
    });

    arrowRight.addEventListener('click', () => {
        // Logik für die Verschiebung zur nächsten Card
        portfolioContainer.scrollBy({
            left: 300, // Ändere dies entsprechend der Breite deiner Cards
            behavior: 'smooth',
        });
    });

    // Füge eine Event-Listener-Funktion hinzu, um die Pfeiltasten der Tastatur zu verwenden
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            // Logik für die Verschiebung zur vorherigen Card
            portfolioContainer.scrollBy({
                left: -300, // Ändere dies entsprechend der Breite deiner Cards
                behavior: 'smooth',
            });
        } else if (event.key === 'ArrowRight') {
            // Logik für die Verschiebung zur nächsten Card
            portfolioContainer.scrollBy({
                left: 300, // Ändere dies entsprechend der Breite deiner Cards
                behavior: 'smooth',
            });
        }
    });

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            }
        });
    };
});
