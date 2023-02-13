// Get the image box and image elements
const imageBox = document.getElementById("image-box");
const image = document.getElementById("image");

// Asynchronous function to retrieve a motivational image from the API
async function getImage() {
    try {
        // Fetch the image from the API
        const response = await fetch("https://inspirobot.me/api?generate=true");
        const url = await response.text();

        // Set the source and alt text of the image
        image.src = url;
        image.alt = "Motivational Image";
    } catch (error) {
        // Log any errors
        console.error(error);
    }
}

// Call the getImage function to retrieve an initial image
getImage();

// Get the "New Image" button element
const newImageButton = document.getElementById("new-image");

// Add a click event listener to the "New Image" button
newImageButton.addEventListener("click", getImage);

// Get the modal and close button elements
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

// Add a click event listener to the "About" link
document.getElementById("about-link").addEventListener("click", function() {
    // Show the modal when the "About" link is clicked
    modal.style.display = "block";
});

// Add a click event listener to the close button
closeModal.addEventListener("click", function() {
    // Hide the modal when the close button is clicked
    modal.style.display = "none";
});

// Add a click event listener to the window
window.addEventListener("click", function(event) {
    // If the target of the click event is the modal
    if (event.target === modal) {
        // Hide the modal
        modal.style.display = "none";
    }
});


// Get the tweet image button element
const tweetImageButton = document.getElementById("tweet-image");

// Add a click event listener to the tweet image button
tweetImageButton.addEventListener("click", function() {
    // Open a new window with a tweet containing the image source
    window.open(`https://twitter.com/intent/tweet?text=Check%20out%20this%20motivational%20image%20from%20https://tryallium.com!%20%23tryallium%20Generated%20by%20Inspirobot: ${image.src}`);
});

// Add a click event listener to the image
image.addEventListener("click", function() {
    // Write the image source to the clipboard on click
    navigator.clipboard.writeText(image.src)
        .then(function() {
            console.log(`Copied to clipboard: ${image.src}`);
        }, function(err) {
            console.error("Could not copy image: ", err);
        });
});

// Get the hamburger menu and navigation elements
const hamburgerMenu = document.querySelector(".hamburger-menu");
const nav = document.querySelector("nav");

// Add a click event listener to the hamburger menu
hamburgerMenu.addEventListener("click", function() {
    // Toggle the display of the navigation menu on click
    nav.style.display = nav.style.display === "block" ? "none" : "block";
});

// Get the logo link element
const logoLink = document.getElementById("logo-link");

// Add a click event listener to the logo link
logoLink.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Write a message to the clipboard on click
    navigator.clipboard.writeText("https://tryallium.com/Ld8D9wd5D/Kdi2p93djs.html");
});


// Get the cookie banner and cookie banner agreement elements
const cookieBanner = document.getElementById("cookie-banner");
const cookieBannerAgree = document.getElementById("cookie-banner-agree");

// Check if the cookie banner has been dismissed
if (!localStorage.getItem("cookieBannerDismissed")) {
    // If the banner hasn't been dismissed, display it
    cookieBanner.style.display = "block";
}

// Add a click event listener to the cookie banner agreement button
cookieBannerAgree.addEventListener("click", function() {
    // When the button is clicked, set the "cookieBannerDismissed" item in local storage to true
    localStorage.setItem("cookieBannerDismissed", true);

    // Hide the cookie banner
    cookieBanner.style.display = "none";
});

// Get the visit message element
const visitMessage = document.getElementById("visit-message");

// Check if the "visitCount" item is stored in local storage
if (!localStorage.getItem("visitCount")) {
    // If it's not stored, set the "visitCount" item to 1
    localStorage.setItem("visitCount", 1);

    // Update the visit message to show the first visit
    visitMessage.innerHTML = "Welcome! This is your first visit here.";
} else {
    // If it's stored, increment the "visitCount" item by 1
    localStorage.setItem("visitCount", parseInt(localStorage.getItem("visitCount")) + 1);

    // Update the visit message to show the number of visits
    visitMessage.innerHTML = `You have visited this site ${localStorage.getItem("visitCount")} times.`;
}

// An array of text options for the cookie banner agreement message
const textOptions = [
  "Got it!",
  "leave me alone",
  "I understand",
  "thanks for the heads up",
  "I got this!",
  "I'm good!",
  "I know the drill!", 
  "been there, done that!", 
  "I've got this!", 
  "I've seen it all!", 
  "been down this road before!", 
  "I'm a pro!", 
  "I'm a veteran!", 
  "I'm a seasoned pro!", 
  "I'm a battle-tested veteran!", 
  "I've seen it all!", 
  "I've heard it all!", 
  "I'm a pro at this!", 
  "I'm a veteran of this!", 
  "I've got this handled!", 
  "I've got this under control!", 
  "I've got this covered!", 
  "I'm a master at this!", 
  "I'm a prodigy at this!", 
  "I'm an expert at this!", 
  "I'm a seasoned veteran!", 
  "I'm a veteran of this game!", 
  "I'm a master of this!", 
  "I'm a seasoned master!", 
  "I'm a veteran of the game!", 
  "I'm a veteran of this!", 
  "I'm a seasoned veteran of this!", 
  "I'm a veteran of this game!"
];

// Get a random index from the textOptions array
const randomIndex = Math.floor(Math.random() * textOptions.length);

// Set the innerHTML of the cookie banner agreement message to the selected random text option
cookieBannerAgree.innerHTML = textOptions[randomIndex];

// Check if the user has visited the website before
if (!localStorage.getItem("hasVisited")) {
  // If it's the first visit, display the cookie banner
  cookieBanner.style.display = "block";

  // Set the "hasVisited" item in local storage to true
  localStorage.setItem("hasVisited", true);
} else {
  // If it's not the first visit, hide the cookie banner
  cookieBanner.style.display = "none";
}