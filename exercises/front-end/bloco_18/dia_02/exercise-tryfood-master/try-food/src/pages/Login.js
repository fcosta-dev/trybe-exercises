import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import TryFoodWhite from '../images/tryfoodwhite.png';

function Login() {
  const [personData, setPersonData] = useState({
    email: '',
    password: '',
  });
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const regexForEmail = /\S+@\S+\.\S+/;
  const length = 6;
  const passwordIsValid = personData.password.length > length;
  const emailIsValid = regexForEmail.test(personData.email);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setPersonData({ ...personData, [name]: value });
  };

  const handleClick = () => {
    const information = {
      email: personData.email,
    };
    localStorage.setItem('login', JSON.stringify(information));
    setShouldRedirect(true);
  };

  return (
    <div className="login d-flex flex-column justify-content-center">
      { shouldRedirect && <Redirect to="/order" /> }
      <img src={ TryFoodWhite } alt="try food logo" width="250px" />
      <span className="slogan">Falta pouco para matar sua fome!</span>
      <form className="d-flex flex-column justify-content-center">
        <input
          className="form-control"
          name="email"
          type="email"
          placeholder="Digite um e-mail válido"
          onChange={ handleChange }
        />
        <input
          className="form-control"
          name="password"
          type="password"
          placeholder="Senha maior que 6 caracteres"
          onChange={ handleChange }
        />
        <button
          className="btn btn-outline-light"
          type="button"
          disabled={ !((passwordIsValid && emailIsValid === true)) }
          onClick={ handleClick }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;
