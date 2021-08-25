import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}>
          Bem-vindo ao sistema de cadastramento de clientes
        </div>
        <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <br />
          <br />
          <br />
          {/* Realiza o apontamento para /login */}
          <Link to="/Login">Faça seu Login</Link>
        </div>
      </>
    );
  }
}

export default Home;
