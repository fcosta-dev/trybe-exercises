import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Clients extends React.Component {
  render() {
    const { registers, userLogin } = this.props;
    if (!userLogin.email) return <div>Login não efetuado!</div>;
    if (registers.length < 1)
      return (
        <div>
          <div>Nenhum cliente cadastrado</div>
          <Link to="/register">Cadastre agora!</Link>
        </div>
      );
    return (
      <div>
        <Link to="/register">Cadastre outros!</Link>
        <div>
          {registers.map((register, index) => {
            return (
              <div key={register.email}>
                <p>ID de registro: {index + 1}</p>
                <p>Nome: {register.name}</p>
                <p>Idade: {register.age}</p>
                <p>Email: {register.email}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registers: state.registerReducer,
  userLogin: state.loginReducer});

export default connect(mapStateToProps)(Clients);
