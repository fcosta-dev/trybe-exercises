// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { addExpenseAction, getCurrencies } from '../actions';

// const INITIAL_STATE = {
//   value: 0,
//   description: '',
//   currency: 'USD',
//   method: 'Dinheiro',
//   tag: '',
// };

// class ExpensesForm extends React.Component {
//   constructor() {
//     super();
//     this.state = INITIAL_STATE;
//     this.renderSelects = this.renderSelects.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   componentDidMount() {
//     const { fetcher } = this.props;
//     fetcher();
//   }

//   handleChange({ target }) {
//     this.setState({
//       [target.name]: target.value,
//     });
//   }

//   handleSubmit(e) {
//     const { fetcher } = this.props;
//     fetcher();
//     e.preventDefault();
//     const { addExpense, id } = this.props;
//     addExpense(this.state, id);
//     this.setState(INITIAL_STATE);
//   }

//   renderSelects() {
//     const { method, tag } = this.state;
//     return (
//       <>
//         <label htmlFor="method-input">
//           Método de pagamento
//           <select
//             name="method"
//             id="method-input"
//             value={ method }
//             onChange={ this.handleChange }
//           >
//             <option value="Dinheiro">Dinheiro</option>
//             <option value="Cartão de crédito">Cartão de crédito</option>
//             <option value="Cartão de débito">Cartão de débito</option>
//           </select>
//         </label>
//         <label htmlFor="tag-input">
//           Tag
//           <select
//             name="tag"
//             id="tag-input"
//             value={ tag }
//             onChange={ this.handleChange }
//           >
//             <option value="" disabled> </option>
//             <option value="Alimentação">Alimentação</option>
//             <option value="Lazer">Lazer</option>
//             <option value="Trabalho">Trabalho</option>
//             <option value="Transporte">Transporte</option>
//             <option value="Saúde">Saúde</option>
//           </select>
//         </label>
//       </>
//     );
//   }

//   render() {
//     const { currencieNames } = this.props;
//     const { value, description, currency } = this.state;
//     return (
//       <form onSubmit={ this.handleSubmit }>
//         <label htmlFor="value-input">
//           Valor
//           <input
//             type="number"
//             name="value"
//             id="value-input"
//             value={ value }
//             onChange={ this.handleChange }
//           />
//         </label>
//         <label htmlFor="desc-input">
//           Descrição
//           <input
//             type="text"
//             name="description"
//             id="desc-input"
//             value={ description }
//             onChange={ this.handleChange }
//           />
//         </label>
//         <label htmlFor="currency-input">
//           Moeda
//           <select
//             name="currency"
//             id="currency-input"
//             value={ currency }
//             onChange={ this.handleChange }
//           >
//             {currencieNames && currencieNames
//               .filter((item) => item !== 'USDT')
//               .map((crcy, i) => (
//                 <option key={ i }>{crcy}</option>
//               ))}
//           </select>
//         </label>
//         {this.renderSelects()}
//         <button type="submit">Adicionar despesa</button>
//       </form>
//     );
//   }
// }

// ExpensesForm.defaultProps = {
//   id: undefined,
//   currencieNames: undefined,
// };

// ExpensesForm.propTypes = {
//   fetcher: PropTypes.func.isRequired,
//   currencieNames: PropTypes.arrayOf(PropTypes.string),
//   addExpense: PropTypes.func.isRequired,
//   id: PropTypes.number,
// };

// const mapDispatchToProps = (dispatch) => ({
//   fetcher: () => dispatch(getCurrencies()),
//   addExpense: (expense, id) => dispatch(addExpenseAction(expense, id)),
// });

// const mapStateToProps = ({ wallet }) => ({
//   currencies: wallet.currencies,
//   currencieNames: wallet.currencieNames,
//   id: wallet.id,
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
