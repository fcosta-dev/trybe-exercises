export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  // Desenvolva aqui o código da action assíncrona
  return (dispatch) => {
    // Finalidade de aguardar a API retornar
    dispatch(requestAPI());
    return fetch('https://aws.random.cat/meow')
      .then((result) => result.json())
        .then((json) => dispatch(getPicture(json))
        )
  }
}
