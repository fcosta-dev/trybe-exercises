import React, { Component } from 'react';
// npm install --save redux-form
import { Field } from 'redux-form';
import Messages from '../components/Messages';
import Grid from '../components/Grid';
import Row from '../components/Row';

class Login extends Component {
  inputsRender() {
    return (
      <form>
        <Field
          type="input"
          name="name"
          placeholder="Nome"
          icon="user"
        />
        <Field
          type="email"
          name="email"
          placeholder="E-mail"
          icon="envelope"
        />
        <Field
          type="password"
          name="password"
          placeholder="Senha"
          icon="lock"
        />
        <Field
          type="password"
          name="confirmPassword"
          placeholder="Confirmar Senha"
          icon="lock"
        />
        <Row>
          <Grid cols="12 12 4">
            <button
              type="submit"
              className="btn btn-primary btn-block btn-flat"
            >
              <span>
                Entrar
              </span>
            </button>
          </Grid>
        </Row>
      </form>
    );
  }

  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <span>
            <strong> My</strong>
            {' '}
            Money
          </span>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Bem vindo!</p>
          inputsRende()
          <br />
          <a href="/#" onClick={ (e) => console.log('Clicou!', e) }>
            <span>
              Entrar aqui!
            </span>
          </a>
        </div>
        <Messages />
      </div>
    );
  }
}

export default Login;
