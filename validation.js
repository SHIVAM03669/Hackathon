document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const errorMessage = document.getElementById("error-message");
    const roleSelect = document.getElementById("role-select");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission
        errorMessage.textContent = ""; // Clear previous error messages

        const email = document.getElementById("email-input").value.trim();
        const password = document.getElementById("password-input").value;

        // Validate inputs
        if (!email) {
            errorMessage.textContent = "Email is required.";
            return;
        }
        if (!password) {
            errorMessage.textContent = "Password is required.";
            return;
        }

        // Get selected role
        const selectedRole = roleSelect.value;
        if (selectedRole) {
            // Redirect based on role
            switch (selectedRole) {
                case 'student':
                    window.location.href = "./about.html"; // URL for students
                    break;
                case 'alumni':
                    window.location.href = "./Alumni.html"; // URL for alumni
                    break; // Redirect to the alumni webpage
                case 'admin':
                    window.location.href = "./admin.html"; // URL for admin
                    break;
                case 'faculty':
                    window.location.href = "./faculty.html"; // URL for faculty
                    break;
                default:
                    errorMessage.textContent = "Please select a valid role.";
            }
        } else {
            errorMessage.textContent = "Please select a role.";
        }
    });
});
