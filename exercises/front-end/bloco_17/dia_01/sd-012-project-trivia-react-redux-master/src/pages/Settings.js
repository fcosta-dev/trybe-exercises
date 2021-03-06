import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { func } from 'prop-types';
import InputCard from '../components/InputCard';
import Select from '../components/Select';
import { actionAddSetting } from '../redux/actions/index';

class Settings extends Component {
  constructor(props) {
    super(props);

    // State inicial vai ser as chaves abaixo
    this.state = {
      error: '',
      categoriesData: [],
      category: 'General Knowledge',
      loading: true,
      amount: 5,
      difficulty: 'any difficulty',
      type: 'any type',
    };

    // As funções abaixo serão habilitadas para serem usadas em todo o componente/page
    this.getCategory = this.getCategory.bind(this);
    this.onHandlerChange = this.onHandlerChange.bind(this);
    this.addSetting = this.addSetting.bind(this);
  }

  componentDidMount() {
    this.getCategory();
  }

  onHandlerChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  getCategory() {
    this.setState({ loading: true }, async () => {
      const resp = await fetch('https://opentdb.com/api_category.php');
      if (!resp.ok) this.setState({ error: 'ocorreu um erro com a requisição' });
      const { trivia_categories: categoriesData } = await resp.json();
      this.setState({ categoriesData, loading: false });
    });
  }

  addSetting() {
    const { dispatchSetting } = this.props;
    const { category, categoriesData, amount, difficulty, type } = this.state;
    const { id } = categoriesData.find(({ name }) => name === category);
    dispatchSetting({ id, amount, difficulty, type });
  }

  render() {
    const {
      error, categoriesData, category, loading, amount, difficulty, type,
    } = this.state;
    const categories = categoriesData.map(({ name }) => name);
    if (loading) return <p>Loading</p>;
    return (
      <div>
        <h1 data-testid="settings-title"> Configurações </h1>
        {error ? <p>error</p> : ''}
        <form>
          <Select
            labelText="Selecione uma categoria"
            id="category-input"
            name="category"
            value={ category }
            change={ this.onHandlerChange }
            options={ categories }
          />
          <Select
            labelText="Selecione um grau de dificuldade:"
            id="difficulty-input"
            name="difficulty"
            value={ difficulty }
            change={ this.onHandlerChange }
            options={ ['any difficulty', 'easy', 'medium', 'hard'] }
          />
          <Select
            labelText="Selecione um tipo de questão:"
            id="type-input"
            name="type"
            value={ type }
            change={ this.onHandlerChange }
            options={ ['any type', 'multiple choice', 'true/false'] }
          />
          <InputCard
            labelText="Quantidade de perguntas:"
            id="amount"
            name="amount"
            type="number"
            value={ amount }
            onChange={ this.onHandlerChange }
          />
          <Link to="/">
            <button type="button" onClick={ this.addSetting }>Aplicar</button>
          </Link>
        </form>
      </div>
    );
  }
}


// A função do mapDispatchToProps é despachar action para a store, com a finalidade de alterar o state da aplicação
// A função dispatch() serve para despachar uma action para o reducer
// Recebe como parametro uma dispatch, e retorna um objeto com chave e valor
const mapDispatchToProps = (dispatch) => ({
  dispatchSetting: (data) => dispatch(actionAddSetting(data)),
});

Settings.propTypes = {
  dispatchSetting: func.isRequired,
};

// O connect é responsável por fazer a conexão do meu componente Login com o mapStateToProps e o mapDispatchToProps.
export default connect(null, mapDispatchToProps)(Settings);
