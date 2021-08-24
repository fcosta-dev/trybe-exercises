import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Importo o connect para conectar o estado global com o componente
import { connect } from 'react-redux';

import { setProfessionalValue } from '../redux/action/action';

// Importando os componentes do formulário
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

class ProfessionalForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curriculo: '',
      cargo: '',
      descricao: '',
    };

    // Estrutura as funções para serem usados com o this em todo o componente
    this.handleChange = this.handleChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleChange({ target }) {
    // Desconstroi o target para pegar o name e o value
    const { name, value } = target;
    // O name é qual o campo a ser alterado, e o value é o valor
    this.setState({ [name]: value });
  }

  onSubmitForm() {
    // Desconstrói a props pegando o history e o dispatchSetValue
    const { history, dispatchSetValue } = this.props;
    dispatchSetValue(this.state);
    history.push('/formdisplay');
  }

  render() {
    // Desconstrói o state
    const { curriculo, cargo, descricao } = this.state;

    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculo }
          name="curriculo"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="cargo"
          type="text"
          value={ cargo }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="descricao"
          maxLength="500"
          onChange={ this.handleChange }
          value={ descricao }
          required
        />
        <Button label="enviar" onClick={ this.onSubmitForm } />
      </fieldset>
    );
  }
}

// Passa os estados para o componente.
// O objeto é o parametro do componente funcional com o que está colocado no initialState da redux/index.js
const mapStateToProps = (state) => ({
  professionalInputs: state.reducer.professionalInputs,
});

// Aqui eu despacho a action para o componente
const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (valueAndName) => dispatch(setProfessionalValue(valueAndName)),
});

ProfessionalForm.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

// Exporta o connect
export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalForm);
