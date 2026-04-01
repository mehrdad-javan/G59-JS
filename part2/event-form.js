/*
const eventModal = document.getElementById('event-modal');
const openBtn = document.getElementById('open-demo-btn');

openBtn.addEventListener('click', openModal);


function openModal() {
    console.log("Open Modal");
    eventModal.classList.remove('hidden');
}
*/





// 1. Define an Event Object
const sampleEvent = {
    title: "Summer Music Festival 2024",
    date: "Aug 24 · 7:00 PM",
    location: "Stockholm Arena",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4",
    description: "Experience the magic of summer with our premier music festival. Featuring top international artists and local talent across multiple stages."
};

// 2. Select DOM Elements
const eventModal = document.getElementById("event-modal");
const openBtn = document.getElementById("open-demo-btn");
const closeBtn = document.getElementById("close-modal");
const regForm = document.getElementById("registration-form");

// 3. Function to populate and open the modal
function openModal(event) {
    // Populate modal with object data
    document.getElementById("modal-img").src = event.image;
    document.getElementById("modal-title").textContent = event.title;
    document.getElementById("modal-date").textContent = event.date;
    document.getElementById("modal-location").textContent = event.location;

    // Change from 'hidden' to 'flex'
    eventModal.classList.remove("hidden");
    eventModal.classList.add("flex");
}

// 4. Function to close the modal
function closeModal() {
    eventModal.classList.add("hidden");
    eventModal.classList.remove("flex");
    regForm.reset();
}

// 5. Event Listeners
openBtn.addEventListener("click", () => {
    openModal(sampleEvent);
});

closeBtn.addEventListener("click", closeModal);

// Close on clicking outside the modal content (backdrop)
eventModal.addEventListener("click", (e) => {
    if (e.target === eventModal) {
        closeModal();
    }
});

// Handle Form Submission
regForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
        eventName: document.getElementById("modal-title").textContent,
        userName: document.getElementById("reg-name").value,
        userEmail: document.getElementById("reg-email").value
    };

    console.log("Registration Successful!", formData);
    alert(`Thank you, ${formData.userName}! You are now registered for ${formData.eventName}.`);

    closeModal();
});