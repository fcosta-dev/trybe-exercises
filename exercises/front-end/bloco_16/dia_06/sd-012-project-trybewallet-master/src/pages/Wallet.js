import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Importa os componentes que irão abrir a página /carteira
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';
import EditForm from '../components/EditForm';

class Wallet extends React.Component {
  render() {
    // Pega o status da state global da aplicação
    const { status } = this.props;

    return (
      <div>
        <Header />
        {/* {status === 'add' && <ExpensesForm />}
        {status === 'edit' && <EditForm />}
        <ExpensesTable /> */}
      </div>
    );
  }
}

// Busca as informações do estado global da aplicação, com base em seus reducers(user ou wallet)
// Chave status recebe o dado como props conforme reducer
const mapStateToProps = ({ wallet }) => ({
  status: wallet.status,
});

Wallet.defaultProps = ({
  status: undefined,
});

Wallet.propTypes = ({
  status: PropTypes.string,
});

export default connect(mapStateToProps, null)(Wallet);
