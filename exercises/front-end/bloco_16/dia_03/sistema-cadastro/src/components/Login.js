import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={event => this.setState({ email: event.target.value })}
            placeholder="email"
          />
          <input
            type="password"
            onChange={event => this.setState({ password: event.target.value })}
            placeholder="senha"
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

const mapDispatchToProps = dispatch => ({
  login: e => dispatch(login(e))});

export default connect(null, mapDispatchToProps)(Login);