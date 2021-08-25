import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { Link } from 'react-router-dom';

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
          style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh', flexDirection: 'column' }}
          >
          <h3>Login</h3> 
          <input
            type="text"
            onChange={event => this.setState({ email: event.target.value })}
            placeholder="email"
            style={ { height:'25px' } }
          />
          <input
            type="password"
            onChange={event => this.setState({ password: event.target.value })}
            placeholder="senha"
            style={ { height:'25px' } }
          />
        </div>
        <Link
          to="/clients"
          onClick={() => this.props.login({ email, password })}>
          Entre
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: event => dispatch(login(event))});

// Por não ter necessidade de leitura da Store, temos apenas o Disparo para gravar algo na Store
export default connect(null, mapDispatchToProps)(Login);