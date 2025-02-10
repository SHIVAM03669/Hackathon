let attendanceRecords = []; // Store attendance records

// Function to mark attendance
function markAttendance() {
    const date = document.getElementById('attendance-date').value;
    const status = document.getElementById('attendance-status').value;

    if (date && status) {
        // Add to attendance records
        attendanceRecords.push({ date, status });
        updateAttendanceSummary();
        displayAttendanceRecords();

        // Clear inputs
        document.getElementById('attendance-date').value = '';
        document.getElementById('attendance-status').value = 'present';
    } else {
        alert('Please select a date and status.');
    }
}

// Function to update attendance summary
function updateAttendanceSummary() {
    const totalClasses = attendanceRecords.length;
    const classesAttended = attendanceRecords.filter(record => record.status === 'present').length;
    const classesAbsent = totalClasses - classesAttended;
    const attendancePercentage = totalClasses > 0 ? (classesAttended / totalClasses) * 100 : 0;

    document.getElementById('total-classes').textContent = totalClasses;
    document.getElementById('classes-attended').textContent = classesAttended;
    document.getElementById('classes-absent').textContent = classesAbsent;
    document.getElementById('attendance-percentage').textContent = `${attendancePercentage.toFixed(2)}%`;

    // Alert if attendance is below 75%
    if (attendancePercentage < 75) {
        alert(`Warning: Your attendance is ${attendancePercentage.toFixed(2)}%, which is below 75%!`);
    }

    // Check attendance report every 15 classes
    if (totalClasses > 0 && totalClasses % 15 === 0) {
        const reportMessage = attendancePercentage >= 75 
            ? `Congratulations! Your attendance is ${attendancePercentage.toFixed(2)}%, which is 75% or above.` 
            : `Alert: Your attendance is ${attendancePercentage.toFixed(2)}%, which is below 75%.`;

        showReportModal(reportMessage);
    }
}

// Function to display attendance records
function displayAttendanceRecords() {
    const attendanceList = document.getElementById('attendance-list');
    attendanceList.innerHTML = ''; // Clear the list

    attendanceRecords.forEach(record => {
        const listItem = document.createElement('li');
        listItem.textContent = `${record.date}: ${record.status.charAt(0).toUpperCase() + record.status.slice(1)}`;
        attendanceList.appendChild(listItem);
    });
}

// Function to show the report modal
function showReportModal(message) {
    const modal = document.getElementById('report-modal');
    document.getElementById('report-message').textContent = message;
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('report-modal');
    modal.style.display = 'none';
}

// Event listener for marking attendance
document.getElementById('mark-attendance').addEventListener('click', markAttendance);

// Event listener for closing the modal
document.querySelector('.close').addEventListener('click', closeModal);

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('report-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
