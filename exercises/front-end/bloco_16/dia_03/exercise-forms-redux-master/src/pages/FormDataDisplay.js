import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { professionalInputs, personalInputs } = this.props;
    const { nome, email, cpf, endereco, cidade, estado } = personalInputs;
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

const mapStateToProps = (state) => ({
  personalInputs: state.reducer.personalInputs,
  professionalInputs: state.reducer.professionalInputs }
);

export default connect(mapStateToProps)(FormDataDisplay);
// funcionaria como (mapStateToProps, null)
