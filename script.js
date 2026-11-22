
document.addEventListener("DOMContentLoaded", () => {

    // Find the contact form
    const contactForm = document.querySelector("#contactForm");

    // Only run this code on pages with the contact form
    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            // Get the values entered by the user
            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const subject = document.querySelector("#subject").value;
            const message = document.querySelector("#message").value.trim();
            const response = document.querySelector("#formResponse");

            // Check that all fields are filled out
            if (!name || !email || !subject || !message) {
                response.textContent = "Please fill out all fields.";
                response.className = "error";
                return;
            }

            // Check that the email address is valid
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {
                response.textContent = "Please enter a valid email address.";
                response.className = "error";
                return;
            }

            // Display a confirmation message
            response.textContent =
                `Thank you, ${name}! Your message has been validated. This is a demo form, so no message was sent.`;

            response.className = "success";

            // Clear the form
            contactForm.reset();
        });
    }

    // Dark/Light Mode Toggle
    const themeToggle = document.querySelector("#themeToggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            const lightMode = document.body.classList.toggle("light-mode");

            themeToggle.textContent = lightMode
                ? "Switch to Dark Mode"
                : "Switch to Light Mode";

            themeToggle.setAttribute("aria-pressed", String(lightMode));
        });
    }

});
