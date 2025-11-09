document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav a');
    const iframe = document.getElementById('demo-frame');

    function setActiveLink(link) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    }

    function loadDemo(url) {
        if (iframe) {
            iframe.src = url;
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('href');
            if (target) {
                const demoName = target.substring(1); // remove #
                const url = `demos/${demoName}.html`;
                loadDemo(url);
                setActiveLink(link);
                window.location.hash = demoName;
            }
        });
    });

    // Set initial active link based on hash
    const initialDemo = window.location.hash || '#buttons';
    const initialLink = document.querySelector(`header nav a[href="${initialDemo}"]`);
    if (initialLink) {
        setActiveLink(initialLink);
        const url = `demos/${initialDemo.substring(1)}.html`;
        loadDemo(url);
    }
});

