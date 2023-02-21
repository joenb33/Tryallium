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