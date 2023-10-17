// script.js

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function highlightActiveSection() {
    const sections = document.querySelectorAll('.content > div');
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 80 && rect.bottom >= 80) {
            const sectionId = section.id;
            const navLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);
            if (navLink) {
                navLink.classList.add('active');
            }
        } else {
            const sectionId = section.id;
            const navLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);
            if (navLink) {
                navLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);
