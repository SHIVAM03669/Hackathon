document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const errorMessage = document.getElementById("error-message");
    const roleSelect = document.getElementById("role-select");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission
        errorMessage.textContent = ""; // Clear previous error messages

        const firstname = document.getElementById("firstname-input").value.trim();
        const email = document.getElementById("email-input").value.trim();
        const password = document.getElementById("password-input").value;
        const repeatPassword = document.getElementById("repeat-password-input").value;
        
        // Validate input fields
        if (!validateForm(firstname, email, password, repeatPassword)) {
            return;
        }

        // Redirect user based on role selection
        redirectUser(roleSelect.value);
    });

    // Function to validate form inputs
    function validateForm(firstname, email, password, repeatPassword) {
        if (!firstname) {
            showError("Name is required.");
            return false;
        }
        if (!email) {
            showError("Email is required.");
            return false;
        }
        if (!password) {
            showError("Password is required.");
            return false;
        }
        if (password !== repeatPassword) {
            showError("Passwords do not match.");
            return false;
        }
        return true;
    }

    // Function to show error messages
    function showError(message) {
        errorMessage.textContent = message;
    }

    // Function to handle redirection based on role selection
    function redirectUser(role) {
        // Define URLs for each role
        const urls = {
            admin: "./admin.html",
            faculty: "./faculty.html",
            student: "./about.html",
            alumni: "./Alumni.html"
        };

        // Redirect if valid role, otherwise show error
        if (urls[role]) {
            window.location.href = urls[role];
        } else {
            showError("Please select a valid role.");
        }
    }
});
