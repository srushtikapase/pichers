document.addEventListener("DOMContentLoaded", () => {
  const slotForm = document.getElementById("slotForm");
  const slotDate = document.getElementById("slotDate");
  const slotTime = document.getElementById("slotTime");
  const slotsList = document.getElementById("slotsList");

  const renderSlots = async () => {
    slotsList.innerHTML = "";
    const snapshot = await db.collection("admin_slots").orderBy("date").get();
    snapshot.forEach(doc => {
      const li = document.createElement("li");
      li.textContent = `${doc.data().date} at ${doc.data().time}`;
      slotsList.appendChild(li);
    });
  };

  slotForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const newSlot = {
      date: slotDate.value,
      time: slotTime.value
    };

    try {
      await db.collection("admin_slots").add(newSlot);
      alert("Slot added successfully!");
      slotForm.reset();
      renderSlots();
    } catch (err) {
      console.error("Error adding slot:", err);
    }
  });

  renderSlots();
});
