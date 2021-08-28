import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Importa as actions
import { actionAddExpense, getCurrencies } from '../actions';

// Foi criado essa constante porque o estado inicial será usado dentro do construtor e em uma função
const INITIAL_STATE = {
  value: 0,
  description: '',
  currency: 'USD',
  method: 'Dinheiro',
  tag: '',
};

class ExpensesForm extends Component {
  constructor(props) {
    super(props);

    // State Inicial
    this.state = INITIAL_STATE;

    // Libera as funções abaixo com o this para serem usadas em toda a classe
    this.renderSelects = this.renderSelects.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // Desconstroi o fetcher criado no mapDispatchToProps
    const { fetcher } = this.props;

    // Função que tem uma dispatch na action para pegar as Moedas, criada no mapDispatchToProps
    fetcher();
  }

  // Função quando houver mudança no campo, ela é executada
  handleChange({ target: { name, value } }) {
    // Faz a alteração do state conforme valor digitado
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    // Desconstroi o fetcher criado no mapDispatchToProps
    const { fetcher } = this.props;
    const { addExpense, id } = this.props;

    // Função que tem uma dispatch na action para pegar as Moedas, criada no mapDispatchToProps
    fetcher();

    event.preventDefault();

    addExpense(this.state, id);
    // Seta o state para ser igual o State Inicial
    this.setState(INITIAL_STATE);
  }

  renderSelects() {
    // Desconstroi a state
    const { method, tag } = this.state;

    return (
      <>
        <label htmlFor="method-input">
          Método de pagamento
          <select
            name="method"
            id="method-input"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag-input">
          Tag
          <select
            name="tag"
            id="tag-input"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="" disabled> </option>
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }

  render() {
    // Desconstroi a props pegando a currencieNames, que é uma chave criada no mapStateToProps
    const { currencieNames } = this.props;
    // Desconstroi a state
    const { value, description, currency } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="value-input">
          Valor
          <input
            type="number"
            name="value"
            id="value-input"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="desc-input">
          Descrição
          <input
            type="text"
            name="description"
            id="desc-input"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency-input">
          Moeda
          <select
            name="currency"
            id="currency-input"
            value={ currency }
            onChange={ this.handleChange }
          >
            {currencieNames && currencieNames
              .filter((item) => item !== 'USDT')
              .map((moeda, index) => (
                <option key={ index }>{ moeda }</option>
              ))}
          </select>
        </label>
        {/* Chama a renderização dos Selects */}
        { this.renderSelects() }
        <button type="submit">Adicionar despesa</button>
      </form>
    );
  }
}

ExpensesForm.defaultProps = {
  id: undefined,
  currencieNames: undefined,
};

ExpensesForm.propTypes = {
  fetcher: PropTypes.func.isRequired,
  currencieNames: PropTypes.arrayOf(PropTypes.string),
  addExpense: PropTypes.func.isRequired,
  id: PropTypes.number,
};

const mapDispatchToProps = (dispatch) => ({
  // Cria uma chave chamada fetcher, que é uma função que dispara uma action que é a getCurrencies e joga seu resultado na nova chave fetcher
  fetcher: () => dispatch(getCurrencies()),
  // Cria uma chave chamada addExpense, que é uma função que dispara uma action que é a actionAddExpense e seu resultado joga na addExpense
  addExpense: (expense, id) => dispatch(actionAddExpense(expense, id)),
});

// Faz a leitura da Store pegando states do reducer Wallet
const mapStateToProps = ({ wallet }) => ({
  currencies: wallet.currencies,
  currencieNames: wallet.currencieNames,
  id: wallet.id,
});

// Efetua conexão na store do mapStateToProps e mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
