import '../web-components';

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav a');
    const iframe = document.getElementById('demo-frame') as HTMLIFrameElement;

    function setActiveLink(link: Element) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = (e.target as HTMLAnchorElement).getAttribute('href');
            if (target) {
                const demoName = target.substring(1); // remove #
                iframe.src = `demos/${demoName}.html`;
                setActiveLink(link);
            }
        });
    });

    // Set initial active link
    const initialDemo = window.location.hash || '#buttons';
    const initialLink = document.querySelector(`header nav a[href="${initialDemo}"]`);
    if (initialLink) {
        setActiveLink(initialLink);
        iframe.src = `demos/${initialDemo.substring(1)}.html`;
    }
});
