import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  fetchCurrencies as getCurrencies,
  endExpenseEdit as finishExpenseEdit,
} from '../actions';

class EditExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    const { expenses, expenseId } = this.props;
    const expense = expenses.find((item) => item.id === expenseId);
    const { value, description, currency, method, tag, id, exchangeRates } = expense;
    this.state = {
      value,
      description,
      currency,
      method,
      tag,
      id,
      exchangeRates,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderInput = this.renderInput.bind(this);
    this.renderSelect = this.renderSelect.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  async handleClick(e) {
    e.preventDefault();
    const { value, description, currency, method, tag, id, exchangeRates } = this.state;
    const { endExpenseEdit } = this.props;
    const expense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };
    endExpenseEdit(expense);
  }

  renderInput(label, type, name, value) {
    return (
      <label htmlFor={ `${name}-input` }>
        {`${label}: `}
        <input
          type={ type }
          id={ `${name}-input` }
          name={ name }
          data-testid={ `${name}-input` }
          onChange={ this.handleChange }
          value={ value }
          className={ `${name}-input` }
        />
      </label>
    );
  }

  renderSelectCurrencies(value, handleChange) {
    const { currencies } = this.props;
    return (
      <select
        id="currency-input"
        name="currency"
        data-testid="currency-input"
        onChange={ handleChange }
        value={ value }
        className="currency-input"
      >
        {currencies.map((currency) => {
          if (currency === 'USDT') return '';
          return (
            <option key={ currency } data-testid={ currency }>
              {currency}
            </option>
          );
        })}
      </select>
    );
  }

  renderSelect(label, name, value, options) {
    return (
      <label htmlFor={ `${name}-input` }>
        {`${label}: `}
        <select
          id={ `${name}-input` }
          name={ name }
          data-testid={ `${name}-input` }
          onChange={ this.handleChange }
          value={ value }
        >
          {options.map((option) => (
            <option key={ option }>{option}</option>
          ))}
        </select>
      </label>
    );
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const methods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    return (
      <form className="edit-expense-form">
        <label htmlFor="currency-input">
          {'Moeda: '}
          {this.renderSelectCurrencies(currency, this.handleChange)}
        </label>
        {this.renderInput('Valor', 'number', 'value', value)}
        {this.renderInput('Descrição', 'text', 'description', description)}
        {this.renderSelect('Tag', 'tag', tag, tags)}
        {this.renderSelect('Método de pagamento', 'method', method, methods)}
        <button
          type="submit"
          onClick={ this.handleClick }
          className="expense-btn end-edit"
        >
          Editar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  expenseId: state.wallet.expenseId,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(getCurrencies()),
  endExpenseEdit: (expense) => dispatch(finishExpenseEdit(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpenseForm);

EditExpenseForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string),
  expenses: PropTypes.arrayOf(PropTypes.object),
  expenseId: PropTypes.number.isRequired,
  endExpenseEdit: PropTypes.func.isRequired,
};

EditExpenseForm.defaultProps = {
  currencies: [],
  expenses: [],
};
