// This file contains JavaScript code for interactivity and animations on the homepage.

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Gallery image transition effect
    const galleryImages = document.querySelectorAll('.gallery img');
    galleryImages.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease';
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)';
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for reaching out! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Fade-in animation on scroll and on load
    function revealFadeIn() {
        const fadeEls = document.querySelectorAll('.fade-in');
        fadeEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add('visible');
            }
        });
    }

    revealFadeIn();
    window.addEventListener('scroll', revealFadeIn);

    // Simple contact form handler (demo only)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            alert('Thank you for contacting Sibusiso Plumbing! We will get back to you soon.');
            form.reset();
        });
    }

    // Quote form handler
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', e => {
            e.preventDefault();
            alert('Thank you for requesting a quote! We will get back to you shortly.');
            quoteForm.reset();
        });
    }
});

// Navigation menu interactivity
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#007BFF';
        link.style.transition = 'color 0.3s ease';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '';
    });
});