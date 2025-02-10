// Calendar navigation logic
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

document.getElementById('prev-month').addEventListener('click', function () {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    updateCalendar();
});

document.getElementById('next-month').addEventListener('click', function () {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar();
});

function updateCalendar() {
    // Update the calendar display here
    alert(`Displaying calendar for ${currentMonth + 1}/${currentYear}`);
}

updateCalendar();
