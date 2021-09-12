// URL da API a ser buscada
const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

// Pega os dados dos planetas da API informada em uma variável acima
const getPlanets = async () => {
  const response = await fetch(API_URL)
    .then((data) => data.json());
  // Retorna os dados apenas da chave results
  return response.results;
};

export default getPlanets;
