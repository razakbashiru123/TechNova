// SEARCH BUTTON ACTION
const searchBtn = document.querySelector(".btn");
const searchInput = document.querySelector(".srch");

searchBtn.addEventListener("click", () => {
    let text = searchInput.value.trim();

    if (text === "") {
        alert("Please enter something to search.");
    } else {
        alert("You searched for: " + text);
    }
});


// FORM VALIDATION
const sendBtn = document.querySelector(".btnn");
sendBtn.addEventListener("click", (e) => {
    e.preventDefault();  // Stop page from refreshing

    const email = document.querySelector("input[type='email']").value.trim();
    const password = document.querySelector("input[type='password']").value.trim();
    const contact = document.querySelector("input[type='number']").value.trim();
    const message = document.querySelector("input[type='message']").value.trim();

    if (email === "" || password === "" || contact === "" || message === "") {
        alert("Please fill in all fields before sending.");
        return;
    }

    // Basic email check
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    // Basic password length check
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    // Contact number check
    if (contact.length < 8) {
        alert("Please enter a valid contact number.");
        return;
    }

    // If everything is correct
    alert("Message sent successfully! Thank you for contacting TechNova.");
});
