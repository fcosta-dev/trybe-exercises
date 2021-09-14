import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkValidity = () => {
    const MIN_PASSWORD_LENGTH = 6;
    if (password.length <= MIN_PASSWORD_LENGTH) return false;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) return false;
    return true;
  };

  const saveToken = () => {
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
  };

  return (
    <form>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          data-testid="email-input"
          name="email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          placeholder="Email"
        />
      </label>
      <label htmlFor="password">
        Senha:
        <input
          type="password"
          data-testid="password-input"
          name="password"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          placeholder="Senha"
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ !checkValidity() }
        onClick={ saveToken }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
