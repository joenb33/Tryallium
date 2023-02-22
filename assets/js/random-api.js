function makeAPIRequest() {
    document.querySelector('#jumbotron').style.display = 'none';
    document.querySelector('#reference').style.display = 'block';
  
    fetch('https://api.chucknorris.io/jokes/random')
      .then(response => response.json())
      .then(data => {
        document.querySelector('#api-response-1').innerHTML = data.value;
      });
    fetch('https://uselessfacts.jsph.pl/random.json?language=en')
      .then(response => response.json())
      .then(data => {
        document.querySelector('#api-response-2').innerHTML = data.text;
      });
    fetch('https://yesno.wtf/api')
      .then(response => response.json())
      .then(data => {
        document.querySelector('#api-response-3').innerHTML = data.answer;
      });
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        document.querySelector('#api-response-4').src = data.message;
        let breed = data.message.split("/")[4];
        breed = breed.replace("-", " ");
        document.querySelector('#api-response-4-breed').innerHTML = breed;
      });
    fetch('https://api.kanye.rest')
      .then(response => response.json())
      .then(data => {
        document.querySelector('#api-response-5').innerHTML = data.quote;
      });
  }
  