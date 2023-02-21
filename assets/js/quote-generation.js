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