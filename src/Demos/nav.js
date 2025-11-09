document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav a')
    const iframe = document.getElementById('demo-frame')

    function setActiveLink(link) {
        navLinks.forEach(l => l.classList.remove('active'))
        link.classList.add('active')
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault()
            const target = e.target.getAttribute('href')
            if (target) {
                const demoName = target.substring(1)
                iframe.src = `demos/${demoName}.html`
                setActiveLink(link)
                history.replaceState(null, '', `#${demoName}`)
            }
        })
    })

    const initialDemo = window.location.hash || '#buttons'
    const initialLink = document.querySelector(`header nav a[href="${initialDemo}"]`)
    if (initialLink) {
        setActiveLink(initialLink)
        iframe.src = `demos/${initialDemo.substring(1)}.html`
    }
})
