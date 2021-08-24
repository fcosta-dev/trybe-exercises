import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Importo o connect para conectar o estado global com o componente
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    // Desconstroi a props
    const { professionalInputs, personalInputs } = this.props;

    // Desconstrói os itens que estão dentro da props personalInputs
    const { nome, email, cpf, endereco, cidade, estado } = personalInputs;

    // Desconstrói os itens que estão dentro da props professionalInputs
    const { curriculo, cargo, descricao } = professionalInputs;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {nome}
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  professionalInputs: PropTypes.objectOf(PropTypes.string).isRequired,
  personalInputs: PropTypes.objectOf(PropTypes.string).isRequired,
};

// Passa os estados para o componente.
// O objeto é o parametro do componente funcional com o que está colocado no initialState da redux/index.js
const mapStateToProps = (state) => ({
  personalInputs: state.reducer.personalInputs,
  professionalInputs: state.reducer.professionalInputs }
);

// Exporta o connect
export default connect(mapStateToProps)(FormDataDisplay);
// funcionaria como (mapStateToProps, null)
