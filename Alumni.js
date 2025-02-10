document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll(".content-section");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = this.getAttribute("data-section");

            sections.forEach(section => {
                section.classList.remove("active");
            });
            document.getElementById(target).classList.add("active");
        });
    });

    // Sample Calendar Display
    const calendarDisplay = document.getElementById("calendar-display");
    const currentDate = new Date();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    for (let i = 1; i <= daysInMonth; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.textContent = i;
        calendarDisplay.appendChild(dayDiv);
    }
});
