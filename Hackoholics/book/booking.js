<!DOCTYPE html>
<html>
<head>
  <title>Book Appointment</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      background: #f9f9f9;
    }

    h1, h2 {
      color: #333;
    }

    #calendar {
      margin-bottom: 20px;
    }

    #timeSlots {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .slot {
      padding: 10px 15px;
      background-color: #e0f7fa;
      border: 1px solid #00acc1;
      border-radius: 8px;
      cursor: pointer;
    }

    .slot:hover {
      background-color: #b2ebf2;
    }

    .slot.selected {
      background-color: #00acc1;
      color: white;
      font-weight: bold;
    }

    label, input, select, textarea {
      display: block;
      margin: 10px 0;
      width: 300px;
    }

    button {
      margin-top: 15px;
      padding: 10px 20px;
      background-color: #26a69a;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #00897b;
    }
  </style>
</head>
<body>

  <h1>Book Appointment</h1>

  <label for="date">Select Date:</label>
  <input type="date" id="calendar" required>

  <h2>Select Time Slot</h2>
  <div id="timeSlots"></div>

  <h2>Appointment Details</h2>
  <form id="appointmentForm">
    <label for="service">Service Type:</label>
    <select id="service" required>
      <option value="">--Select--</option>
      <option value="Consultation">Consultation</option>
      <option value="Check-up">Check-up</option>
      <option value="Follow-up">Follow-up</option>
    </select>

    <label for="notes">Additional Notes:</label>
    <textarea id="notes" rows="4" placeholder="Write something..."></textarea>

    <button type="submit">Confirm Appointment</button>
  </form>

  <script>
    const timeSlotsContainer = document.getElementById("timeSlots");
    let selectedSlot = null;

    const startHour = 9;  // 9 AM
    const endHour = 17;   // 5 PM
    const interval = 30;  // in minutes

    function generateTimeSlots() {
      for (let hour = startHour; hour < endHour; hour++) {
        for (let mins = 0; mins < 60; mins += interval) {
          const slotText = formatTime(hour, mins);
          const slotDiv = document.createElement("div");
          slotDiv.classList.add("slot");
          slotDiv.textContent = slotText;

          slotDiv.addEventListener("click", () => {
            document.querySelectorAll(".slot").forEach(s => s.classList.remove("selected"));
            slotDiv.classList.add("selected");
            selectedSlot = slotText;
          });

          timeSlotsContainer.appendChild(slotDiv);
        }
      }
    }

    function formatTime(hour, mins) {
      const ampm = hour >= 12 ? "PM" : "AM";
      const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
      const formattedMins = mins < 10 ? "0" + mins : mins;
      return `${formattedHour}:${formattedMins} ${ampm}`;
    }

    generateTimeSlots();

    document.getElementById("appointmentForm").addEventListener("submit", (e) => {
      e.preventDefault();

      const date = document.getElementById("calendar").value;
      const service = document.getElementById("service").value;
      const notes = document.getElementById("notes").value;

      if (!date || !selectedSlot || !service) {
        alert("Please fill all required fields and select a time slot.");
        return;
      }

      // Example confirmation message
      alert(`Appointment booked on ${date} at ${selectedSlot} for ${service}.`);

      // Here you can push the data to Firebase Firestore
    });
  </script>
</body>
</html>
