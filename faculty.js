function submitAttendance() {
    const attendanceForm = document.getElementById('attendance-form');
    const formData = new FormData(attendanceForm);
    const attendanceData = {};

    for (let [key, value] of formData.entries()) {
        attendanceData[key] = value;
    }

    // Display the attendance data in console (for now)
    console.log('Attendance Data:', attendanceData);

    // You can add code here to send the attendance data to the server
    alert('Attendance submitted successfully!');
}

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        // Create a new div for the faculty message
        const newMessage = document.createElement('div');
        newMessage.classList.add('chat-message', 'faculty-message');
        newMessage.textContent = 'Faculty: ' + messageText;

        // Append the new message to the chat box
        const chatBox = document.getElementById('chat-box');
        chatBox.appendChild(newMessage);

        // Clear the input field
        messageInput.value = "";

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Change Navbar Color on Scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Doughnut Graph for Student Performance
const ctx = document.getElementById('studentGraph').getContext('2d');
const studentPerformance = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Score > 90', 'Score 80-89', 'Score 70-79', 'Score < 70'],
        datasets: [{
            label: 'Student Performance',
            data: [8, 7, 5, 0], // Example data
            backgroundColor: ['#4caf50', '#ff9800', '#f44336', '#2196f3'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Performance Distribution of Students'
            }
        }
    }
});