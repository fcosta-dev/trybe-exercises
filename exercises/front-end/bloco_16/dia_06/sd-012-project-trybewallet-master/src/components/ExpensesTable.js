// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { removeExpenseAction, selectExpense } from '../actions';

// const heads = [
//   'Descrição', 'Tag', 'Método de pagamento',
//   'Valor', 'Moeda', 'Câmbio utilizado',
//   'Valor convertido', 'Moeda de conversão', 'Editar/Excluir',
// ];

// class ExpensesTable extends Component {
//   constructor() {
//     super();
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(target, payload) {
//     const { removeExpense, selectExpenseAct } = this.props;
//     if (target.name === 'delete') {
//       removeExpense(payload);
//     }
//     if (target.name === 'edit') {
//       selectExpenseAct(payload);
//     }
//   }

//   render() {
//     const { expenses } = this.props;
//     return (
//       <div>
//         <table>
//           <thead>
//             <tr>
//               {heads.map((head) => <th key={ head }>{head}</th>)}
//             </tr>
//           </thead>
//           <tbody>
//             {expenses.map((expense) => {
//               const { id, currency, description,
//                 tag, method, value, exchangeRates } = expense;
//               return (
//                 <tr key={ id }>
//                   <td>{description}</td>
//                   <td>{tag}</td>
//                   <td>{method}</td>
//                   <td>{value}</td>
//                   <td>{(exchangeRates[currency].name).split('/')[0]}</td>
//                   <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
//                   <td>{Number(exchangeRates[currency].ask * value).toFixed(2)}</td>
//                   <td>Real</td>
//                   <td>
//                     <button
//                       type="button"
//                       data-testid="edit-btn"
//                       name="edit"
//                       onClick={ ({ target }) => this.handleClick(target, expense) }
//                     >
//                       Editar
//                     </button>
//                     <button
//                       type="button"
//                       name="delete"
//                       data-testid="delete-btn"
//                       onClick={ ({ target }) => this.handleClick(target, id) }
//                     >
//                       Excluir
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }

// ExpensesTable.propTypes = {
//   expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
//   removeExpense: PropTypes.func.isRequired,
//   selectExpenseAct: PropTypes.func.isRequired,
// };

// const mapStateToProps = ({ wallet }) => ({
//   expenses: wallet.expenses,
// });

// const mapDispatchToProps = (dispatch) => ({
//   removeExpense: (id) => dispatch(removeExpenseAction(id)),
//   selectExpenseAct: (expense) => dispatch(selectExpense(expense)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
