import React from 'react';

function Login() {
  return (
    <div>
      <div>
        <input
          type="text"
          data-testid="email-input"
        />
        <input
          type="password"
          data-testid="password-input"
        />
      </div>
      <button
        type="button"
        data-testid="login-submit-btn"
      >
        Entrar
      </button>
    </div>
  );
}

export default Login;
