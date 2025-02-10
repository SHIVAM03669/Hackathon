 // Role-based access control
 let userRole = 'admin'; // Change this value to 'faculty', 'admin', 'student', or 'alumni' to test

 const announcementInput = document.getElementById('announcement-input');
 const eventDateInput = document.getElementById('event-date');
 const postButton = document.getElementById('post-button');
 const announcementList = document.getElementById('announcement-list');
 const eventListItems = document.getElementById('event-list-items');
 const notificationTab = document.getElementById('notification-tab');
 const calendarTable = document.getElementById('calendar');

 let notifications = [];
 let events = []; // Store events as objects with date and description
 let announcements = []; // Store announcements

 // Function to show/hide the post announcement section based on user role
 function updateAccess() {
     if (userRole === 'faculty' || userRole === 'admin') {
         document.getElementById('post-announcement').style.display = 'block';
     } else {
         document.getElementById('post-announcement').style.display = 'none';
     }

     // Display existing announcements for all roles
     displayAnnouncements();
 }

 // Function to post an announcement or event
 function postAnnouncement() {
     const announcementText = announcementInput.value.trim();
     const eventDate = eventDateInput.value;

     if (announcementText !== '') {
         // Create a new announcement
         const newAnnouncement = { text: announcementText, date: new Date().toLocaleString() };
         announcements.push(newAnnouncement);
         displayAnnouncements();

         // If there's an event date, add it to the calendar
         if (eventDate) {
             const eventObj = { date: eventDate, description: announcementText };
             events.push(eventObj);
             addEventToCalendar(eventObj);
             addEventToList(eventObj);
         }

         // Notify the community
         addNotification(announcementText);
         sendEmailNotification(announcementText);

         // Clear input fields
         announcementInput.value = '';
         eventDateInput.value = '';
     } else {
         alert('Please enter an announcement before posting.');
     }
 }

 // Function to display all announcements
 function displayAnnouncements() {
     announcementList.innerHTML = ''; // Clear the list before displaying
     announcements.forEach(announcement => {
         const announcementItem = document.createElement('li');
         announcementItem.textContent = `${announcement.date}: ${announcement.text}`;
         announcementList.appendChild(announcementItem);
     });
 }

 // Function to add a notification to the notification tab
 function addNotification(announcementText) {
     notifications.push(announcementText);
     updateNotificationTab();
 }

 // Update notification tab with the latest notification count
 function updateNotificationTab() {
     notificationTab.textContent = `Notifications (${notifications.length})`;
 }

 // Simulate sending an email notification (replace with actual email sending logic)
 function sendEmailNotification(announcementText) {
     console.log(`Email sent to students and faculty: "${announcementText}"`);
 }

 // Show notifications when clicking on the tab
 notificationTab.addEventListener('click', function () {
     alert(`You have ${notifications.length} new notification(s):\n` + notifications.join('\n'));
 });

 // Generate a simple calendar for the current month
 function generateCalendar() {
     const now = new Date();
     const year = now.getFullYear();
     const month = now.getMonth();

     const daysInMonth = new Date(year, month + 1, 0).getDate();
     const firstDay = new Date(year, month, 1).getDay();

     let calendarHTML = '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';
     let dayCount = 1;

     for (let i = 0; i < 6; i++) {
         calendarHTML += '<tr>';
         for (let j = 0; j < 7; j++) {
             if (i === 0 && j < firstDay) {
                 calendarHTML += '<td></td>';
             } else if (dayCount <= daysInMonth) {
                 calendarHTML += `<td id="day-${dayCount}">${dayCount}</td>`;
                 dayCount++;
             } else {
                 calendarHTML += '<td></td>';
             }
         }
         calendarHTML += '</tr>';
     }

     calendarTable.innerHTML = calendarHTML;
 }

 // Function to highlight event dates on the calendar
 function addEventToCalendar(eventObj) {
     const eventDate = new Date(eventObj.date);
     const eventDay = eventDate.getDate();

     const eventCell = document.getElementById(`day-${eventDay}`);
     if (eventCell) {
         eventCell.classList.add('event-day');
         eventCell.setAttribute('title', eventObj.description);
     }
 }

 // Function to add event details to the event list
 function addEventToList(eventObj) {
     const eventItem = document.createElement('li');
     eventItem.textContent = `${eventObj.date}: ${eventObj.description}`;
     eventListItems.appendChild(eventItem);
 }

 // Generate the calendar and update access when the page loads
 generateCalendar();
 updateAccess();

 // Add event listener for posting announcements
 postButton.addEventListener('click', postAnnouncement);