import React from 'react';
import { connect } from 'react-redux';
import { addRegister } from '../actions';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      age: '',
      email: '',
    };
  }

  // Pega último numero de id do registro
  // registers pegou da props lida do mapStateToProps
  lastIDRegister = (registers) => {
    // O apply funciona como se você tivesse passado os valores do array como parâmetros da função max, e equivaleria a se digitar Math.max(0,12,13,2.... O primeiro parâmetro equivale ao escopo a ser usado na função, e neste caso, como é indiferente, passamos null, que representa o escopo global.
    return Math.max.apply(null, registers.id)
  }


  validateRegister = () => {
    let { id } = this.state
    const { name, age, email } = this.state;

    // Necessário criar aqui abaixo um critério para pegar Id mais alto
    (!id ? this.lastIDRegister() : id)

    // Adiciona registro
    this.props.addRegister({ id , name, age, email });
    this.setState({
      id: '',
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
const mapStateToProps = (state) => ({
  userLogin: state.loginReducer,
  registers: state.registerReducer
});

const mapDispatchToProps = (dispatch) => ({
  addRegister: event => dispatch(addRegister(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);