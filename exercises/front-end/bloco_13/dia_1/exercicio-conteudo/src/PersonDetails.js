// PersonDetails.js
import React, { Component } from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';

class PersonDetails extends Component {
  constructor() {
    super();

    // No construtor, criamos os nossos estados de Loding e Person, que vai receber a requisição para a api.
    // Começamos com o Loading como true, pois queremos que ele exiba a nossa mensagem de "carregando" enquanto
    // não renderizamos a primeira tela. Já o Person, setamos como um estado vázio, pois ele ira receber a nossa API.

    this.state = {
      loading: true,
      person: [],
    };
  }

  // Como estudamos, o componentDidMount vai disparar ações após o componenete ser inserido no DOM, por isso dizemos que é
  // o ideal para realizar requisições e atribuimos ao nosso estado Person o 'data.results' 
  // que trás os nossos dados da API. Além disso, atribuimos como false o Loading, 
  // uma vez que quando a página é renderizada, não teremos mais a mensagem de "carregando".

  componentDidMount() {
    const url = 'https://api.randomuser.me/';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Note que, nesse ponto o nosso data retorna um Objeto e, se acessarmos o data.results, teremos nosso array de objetos com
        // as informações das pessoas que são geradas aleatoriamente pela requisição.
        // console.log(data);
        // console.log(data.results);
        this.setState({
          person: data.results,
          loading: false,
        });
      });
  }

  // o shoudComponentUptade irá verificar se a pessoa renderizada pela API tem mais de 50 anos
  // e com isso, irá autorizar se o componente atualiza ou não. Caso não atualize,
  // uma mensagem de "carregando..." será exibida na tela. Caso ocorra essa situação, dê
  // um console.log no nextState e verifique a idade da pessoa que é trazida pela API.
  shouldComponentUpdate(_nextProps, nextState) {
    // console.log(nextState);
    const AGE = 50;
    if (nextState.person[0].dob.age > AGE) {
      return false;
    }
    return true;
  }

  // Considerando que a API retorna um array de objetos,
  // a função abaixo foi criada para extrair extrair os dados que precisamos e atribuir
  // esses dado a suas respectivas keys.
  getUserElements(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  render() {
    const { person, loading } = this.state;
    // Condição criada para verificar se o estado de loading for true, irá trazer
    // o componente de loading com a mensagem de "carregando..."
    if (loading) return <Loading />;
    return (
      // Para renderizar as informações que precisamos, foi feito um map que trás o componente de
      // PersonCard, que contém as informações com nome, email, idade e a foto.
      // Passamos como props a função de getUserElements que retonar um objeto com as informações da pessoa
      // e como parametro da função, passamos o currentePerson.
      <div>
        {person.map((currentPerson, index) => (
          <PersonCard key={ index } person={ this.getUserElements(currentPerson) } />))}
      </div>
    );
  }
}

export default PersonDetails;