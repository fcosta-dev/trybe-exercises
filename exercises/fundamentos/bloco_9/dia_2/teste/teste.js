function fetchCountry(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then((response)  => { response.json()
      .then((countries) => {
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        li.innerHTML = `${countries[0].nativeName} - ${countries[0].capital}`
        ul.appendChild(li);
      })
    })
}

window.onload = fetchCountry('brasil')
