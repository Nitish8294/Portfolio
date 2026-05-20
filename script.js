// Simple Form Validation/Handling interceptor
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // If you are using a service like Formspree, remove e.preventDefault()
        e.preventDefault();

        const formMessage = document.getElementById('form-message');
        if (formMessage) {
            formMessage.textContent = 'Thank you! Your message has been recorded. This form can be linked to a backend service when ready.';
            formMessage.classList.add('visible');
        }

        contactForm.reset();
        setTimeout(() => {
            if (formMessage) {
                formMessage.classList.remove('visible');
            }
        }, 4500);
    });
}