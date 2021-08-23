import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addRegister } from './actions';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      email: '',
    };

    this.validateRegister = this.validateRegister.bind(this);
  }

  validateRegister = () => {
    const { name, age, email } = this.state;
    addRegister({ name, age, email }); // this.props.addRegister
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
            value={ name }
            onChange={ (e) => this.setState({ name: e.target.value }) }
          />
          <input
            type="number"
            placeholder="Idade"
            value={ age }
            onChange={ (e) => this.setState({ age: e.target.value }) }
          />
          <input
            type="text"
            placeholder="Email"
            value={ email }
            onChange={ (e) => this.setState({ email: e.target.value }) }
          />
        </div>
        <button onClick={ this.validateRegister }>Registrar Cliente</button>
        <Link to="/clients">Ver clientes cadastrados</Link>
      </div>
    );
  }
}

Register.propTypes = {
  login: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  userLogin: state.loginReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addRegister: (e) => dispatch(addRegister(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
