// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  fetch(API_URL, { headers: { Accept: 'application/json' } }) // função fetch é uma Promise
    .then(response => response.json())
    .then(data => 
      document.getElementById('jokeContainer').innerText = data.joke
    );
};

window.onload = () => fetchJoke();
