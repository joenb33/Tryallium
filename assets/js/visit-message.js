// Get the visit message element
const visitMessage = document.getElementById("visit-message");

// Check if the "visitCount" and "lastVisit" items are stored in local storage
if (!localStorage.getItem("visitCount")) {
    // If it's not stored, set the "visitCount" item to 1 and the "lastVisit" item to the current date and time
    localStorage.setItem("visitCount", 1);
    localStorage.setItem("lastVisit", new Date().toISOString());

    // Update the visit message to show the first visit
    visitMessage.innerHTML = "Welcome! This is your first visit here.";
} else {
    // If it's stored, increment the "visitCount" item by 1 and update the "lastVisit" item to the current date and time
    const visitCount = parseInt(localStorage.getItem("visitCount")) + 1;
    localStorage.setItem("visitCount", visitCount);
    localStorage.setItem("lastVisit", new Date().toISOString());

    // Define the visit message text for both modes
    const visitMessageTextCount = `You have visited this site ${visitCount} times.`;
    const visitMessageTextLastVisit = `Your last visit was on ${new Date(localStorage.getItem("lastVisit")).toLocaleString()}.`;

    // Update the visit message to show the number of visits and make it clickable
    visitMessage.innerHTML = visitMessageTextCount;
    visitMessage.style.cursor = "pointer";

    // Add a click event listener to toggle the visit message text
    let showLastVisit = false;
    visitMessage.addEventListener("click", () => {
        if (showLastVisit) {
            visitMessage.innerHTML = visitMessageTextCount;
        } else {
            visitMessage.innerHTML = visitMessageTextLastVisit;
        }
        showLastVisit = !showLastVisit;
    });
}
