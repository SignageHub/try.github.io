document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    // const formStatus = document.getElementById('formStatus'); // No longer needed with Formspree directly

    // Update current year dynamically in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Since you're using Formspree, direct JS submission isn't needed for basic functionality.
    // Formspree handles the submission and redirects/shows messages.
    // However, if you want custom feedback messages *before* Formspree redirect/load,
    // you'd typically handle it via AJAX or check Formspree's success/error parameters
    // after the redirect. For this setup, the HTML form `action` and `method` attributes
    // are sufficient.

    // If you later decide to use JavaScript for a more dynamic form submission (without page reload),
    // you would uncomment and modify this section to use fetch API.
    /*
    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: formData, // Send FormData directly for formspree
                    headers: {
                        'Accept': 'application/json' // Essential for Formspree AJAX response
                    }
                });

                if (response.ok) {
                    const result = await response.json();
                    if (result.ok) { // Formspree returns { ok: true } on success
                        formStatus.textContent = 'Thank you for your message! We will get back to you soon.';
                        formStatus.className = 'form-status success';
                        contactForm.reset(); // Clear the form
                    } else {
                        formStatus.textContent = 'Oops! Something went wrong. Please try again.';
                        formStatus.className = 'form-status error';
                    }
                } else {
                    formStatus.textContent = 'Oops! Network error or server issue. Please try again later.';
                    formStatus.className = 'form-status error';
                }
            } catch (error) {
                console.error('Submission error:', error);
                formStatus.textContent = 'Oops! An unexpected error occurred. Please try again.';
                formStatus.className = 'form-status error';
            }
            formStatus.style.display = 'block'; // Show the status message
        });
    }
    */
});