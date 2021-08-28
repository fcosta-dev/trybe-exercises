import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  constructor(props) {
    super(props);

    // Libera a função abaixo para
    this.sumTotal = this.sumTotal.bind(this);
  }

  sumTotal() {
    const { expenses } = this.props;
    let soma = 0;
    expenses.forEach(({ value, currency, exchangeRates }) => {
      soma += exchangeRates[currency].ask * value;
    });
    return soma.toFixed(2);
  }

  render() {
    // Pega o email do estado global da aplicação
    // Pega qual câmbio está sendo utilizado
    const { email, currency } = this.props;

    return (
      <header id="page-header">
        <h4 data-testid="email-field">{ email }</h4>
        <p data-testid="total-field">{ this.sumTotal() }</p>
        <p data-testid="header-currency-field">{ currency }</p>
      </header>
    );
  }
}

Header.defaultProps = {
  expenses: undefined,
  currency: undefined,
};

Header.propTypes = {
  email: PropTypes.string.isRequired,
  currency: PropTypes.string,
  total: PropTypes.number.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object),
};

// Busca as informações do estado global da aplicação, com base em seus reducers(user ou wallet)
// 4 novas chaves receberão estes dados como props
const mapStateToProps = ({ user, wallet }) => ({
  email: user.email,
  currency: wallet.currency,
  total: wallet.total,
  expenses: wallet.expenses,
});

// Efetua a conexão do mapStateToProps com a store
export default connect(mapStateToProps, null)(Header);
