import React from 'react';
import { connect } from 'react-redux';
import { addRegister } from '../actions';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  validateRegister = () => {
    const { name, age, email } = this.state;
    this.props.addRegister({ name, age, email });
    this.setState({
      name: '',
      age: '',
      email: '',
    });
  };

  render() {
    const { name, age, email } = this.state;
    const { userLogin } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={event => this.setState({ name: event.target.value })}
          />
          <input
            type="number"
            placeholder="Idade"
            value={age}
            onChange={event => this.setState({ age: event.target.value })}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={event => this.setState({ email: event.target.value })}
          />
        </div>
        <button onClick={this.validateRegister}>Registrar Cliente</button>
        <Link to="/clients">Ver clientes cadastrados</Link>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  userLogin: state.loginReducer});
const mapDispatchToProps = dispatch => ({
  addRegister: e => dispatch(addRegister(e))});

export default connect(mapStateToProps, mapDispatchToProps)(Register);