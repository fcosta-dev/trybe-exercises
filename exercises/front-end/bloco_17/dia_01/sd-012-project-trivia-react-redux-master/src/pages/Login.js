import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { func, string } from 'prop-types';
import InputCard from '../components/InputCard';
import fetchToken from '../redux/fetchs/fetchToken';
import { actionSaveDataUser } from '../redux/actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      playerName: '',
      validation: true,
      redirect: false,
    };

    this.onHandlerChange = this.onHandlerChange.bind(this);
    this.onValidation = this.onValidation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    const { getToken } = this.props;
    getToken();
  }

  onValidation() {
    const min = 3;
    const { email, playerName } = this.state;
    const validation = !(/\w+@\w+.com/.test(email)
      && playerName.length > min
      && (/[A-z\s]+/).test(playerName));
    this.setState({ validation });
  }

  onHandlerChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.onValidation());
  }

  onSubmit(event) {
    event.preventDefault();
    const { email, playerName } = this.state;
    const { saveUser } = this.props;
    saveUser({ email, playerName });
    this.setState({ redirect: true });
    const state = JSON.parse(localStorage.getItem('state')) || {};
    localStorage.setItem(
      'state',
      JSON.stringify({
        player: {
          ...state.player,
          name: playerName,
          gravatarEmail: email,
          score: 0,
          assertions: 0 },
      }),
    );
  }

  render() {
    const { token } = this.props;
    const { email, playerName, validation, redirect } = this.state;
    if (redirect && token) { return <Redirect to="/game" />; }
    return (
      <form onSubmit={ this.onSubmit }>
        <InputCard
          labelText="Nome:"
          id="input-player-name"
          name="playerName"
          type="text"
          value={ playerName }
          onChange={ this.onHandlerChange }
        />
        <InputCard
          labelText="Email:"
          id="input-gravatar-email"
          name="email"
          type="texto"
          value={ email }
          onChange={ this.onHandlerChange }
        />
        <button
          data-testid="btn-play"
          type="submit"
          disabled={ validation }
        >
          Jogar
        </button>
        <Link to="/settings">
          <button
            data-testid="btn-settings"
            type="button"
          >
            Settings
          </button>
        </Link>
      </form>
    );
  }
}

const mapDipatchToProps = (dispatch) => ({
  getToken: (data) => dispatch(fetchToken(data)),
  saveUser: (data) => dispatch(actionSaveDataUser(data)),

});

const mapStateToProps = (state) => ({
  token: state.user.token,
});

export default connect(mapStateToProps, mapDipatchToProps)(Login);

Login.propTypes = {
  getToken: func.isRequired,
  saveUser: func.isRequired,
  token: string.isRequired,
};
