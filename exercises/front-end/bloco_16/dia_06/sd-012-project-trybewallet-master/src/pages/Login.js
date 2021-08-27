import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);

    // State inicial
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div
          className="div_inputs"
          style={ {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '30vh',
            flexDirection: 'column',
          } }
        >
          <h3>Login</h3>
          <input
            type="text"
            onChange={ (event) => this.setState({ email: event.target.value }) }
            placeholder="email"
            style={ { height: '25px' } }
          />
          <input
            type="password"
            onChange={ (event) => this.setState({ password: event.target.value }) }
            placeholder="senha"
            style={ { height: '25px' } }
          />
          <br />
          <Link
            to="/clients"
            // Chamo o login que está na props e disparo os panametros email e password
            onClick={ () => this.props.login({ email, password }) }
          >
            Entre
          </Link>
        </div>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   login: event => dispatch(login(event))});

// Por não ter necessidade de leitura da Store, temos apenas o Disparo para gravar algo na Store
export default connect(null, null)(Login);
