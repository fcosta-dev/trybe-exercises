import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}>
        Bem-vindo ao sistema de cadastramento de clientes
        <br />
        <br />
        <Link to="/Login">Faça seu Login</Link>
      </div>
    );
  }
}

export default Home;
