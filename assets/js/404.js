const img = document.getElementById("error-image");
const text = document.querySelector(".error-box p");
const messages = [
  "Whoops! It looks like the page you were looking for has gone missing. Don't worry though, it's probably just hiding!",
  "Oops! The page you were looking for seems to have vanished. Have no fear, we'll find it!",
  "Hm, it seems that the page you were looking for has disappeared. But don't worry, we're on the case!",
  "Oops! It looks like this page has gone on a little adventure and can't be found right now.",
  "Sorry, we can't find what you're looking for. Maybe try searching behind the couch cushions?",
  "Well, this is awkward. It seems like the page you're looking for is lost in the internet void.",
  "We can't find the page you're looking for. Maybe it's off having a spa day?",
  "Hmmm, we can't seem to locate this page. Have you tried calling it on its cell phone?",
  "Looks like this page went on a little vacation and forgot to tell us where it went.",
  "We're sorry, but the page you're looking for is MIA (Missing in Action).",
  "The page you're trying to find seems to have gone missing. Maybe it's out solving mysteries?",
  "Well, this is embarrassing. The page you're looking for seems to have gone into hiding.",
  "We can't seem to find the page you're looking for. Maybe it's in the witness protection program?",
  "It appears that the page you're looking for is missing. Don't worry, we've sent out a search party.",
  "Oopsie! The page you're searching for is taking a nap and can't be disturbed right now.",
  "The page you're looking for is missing, and we're all out of breadcrumbs to find it.",
  "We're sorry, but it seems like the page you're trying to find is in a witness protection program.",
  "We can't find the page you're looking for. Maybe it's gone to a secret hideout.",
  "It seems like the page you're searching for is out on an adventure, exploring the world.",
  "We're sorry, but the page you're trying to find is hiding in the Bermuda Triangle.",
  "We can't locate the page you're looking for. Maybe it's taking a break from the internet and living its best life.",
  "Oops, looks like the page you're searching for has escaped our grasp.",
  "It seems like the page you're looking for has gone on a walkabout and forgot to leave us a note.",
  "We're sorry, but it appears that the page you're trying to find is playing a game of hide and seek.",
  "We can't find the page you're looking for. Maybe it's on a secret mission to save the internet from bad coding.",
  "It seems like the page you're searching for has gone into the witness protection program.",
  "The page you're looking for is taking a sabbatical from the internet. We'll let you know when it's back.",
  "We're sorry, but it looks like the page you're trying to find has gone on a solo trip to find itself.",
  "We can't seem to find the page you're looking for. Maybe it's been accidentally deleted by our pet cat.",
  "It seems like the page you're searching for has taken a break from the internet to become a hermit crab.",
  "We're sorry, but the page you're trying to find has gone on a walkabout and might not come back.",
  "We can't find the page you're looking for. Maybe it's off pursuing its lifelong dream of becoming a unicorn.",
  "It seems like the page you're searching for has disappeared into the Matrix. Maybe Neo can help us find it."

];

// update the text and image when the page loads
const xhr = new XMLHttpRequest();
xhr.open('GET', '../config.php');
xhr.onload = function() {
  if (xhr.status === 200) {
    const apiKey = xhr.responseText;
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=404+not+found&api_key=${apiKey}&limit=1&offset=0&rating=g&lang=en`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.data[0].images.original.url;
        const altText = data.data[0].title;
        img.src = imageUrl;
        img.alt = altText;
      })
      .catch(error => {
        console.error(error);
      });
  }
  else {
    console.error('Unable to load API key');
  }
};

const randomIndex = Math.floor(Math.random() * messages.length);
text.textContent = messages[randomIndex];
xhr.send();