    import React, { Component } from 'react';
  import { Redirect } from 'react-router-dom';

  class StrictAccess extends Component {
    render() {
      const { username, password } = this.props.user; // Recebo a props passada de App.js
      if (!(username==='joao' && password === '1234')){
        alert('Access denied');
        //  Redirect é um componente que permite ativamente levar quem usa a aplicação para diferentes locais dela
        // Um caso de uso bastante comum de Redirect é autenticação: a pessoa só pode acessar informações sensíveis (tipo conta bancária) de uma aplicação se ela já estiver autenticada; caso contrário, ela é redirecionada para uma página de login.
        return <Redirect to="/" /> 
      }
      return (
        <p>Welcome joao!</p>
      );
    }
  }

  export default StrictAccess;
