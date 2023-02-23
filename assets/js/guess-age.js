function getAge() {
    const name = document.getElementById("nameInput").value;
    const url = `https://api.agify.io?name=${name}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        document.getElementById("result").innerHTML = `${name} is estimated to be ${data.age} years old.`;
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById("result").innerHTML = `There was an error. Please try again later.`;
      });
  }
  