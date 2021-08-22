import React from 'react';
import PropTypes from 'prop-types';

// Importando o connect para conectar o estado global com o componente
import { connect } from 'react-redux';

// Importa função action changeSignal do arquivo actionCreators
import { changeSignal } from './redux/actionCreators';

// Importando imagens do Sinaleiro
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';

// Essa função recebe um parametro que vem da props
const renderSignal = (signalColor) => {
  // Dentro da função é verificado o que recebe como parametro
  // Dependendo da cor vai retornar para gente uma imagem
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

// É um componente funcional, por isso é feito desta forma, sem o render().
// Ele recebe duas props signalColor e changeSignal
const TrafficSignal = ({ signalColor, changeSignal }) => {
  return (
    <div>
      <div className="button-container">
        {/* Passamos para nossa action como red, e a action vai alterar o nosso reducer */}
        {/* Na props, foi guardada na chave signalColor o 'red' */}
        <button onClick={() => changeSignal('red')} type="button">Red</button>
        {/* Passamos para nossa action como yellow, e a action vai alterar o nosso reducer */}
        <button onClick={() => changeSignal('yellow')} type="button">Yellow</button>
        {/* Passamos para nossa action como green, e a action vai alterar o nosso reducer */}
        <button onClick={() => changeSignal('green')} type="button">Green</button>
      </div>
      {/* Aqui mostrará a imagem a ser exibida */}
      {/* Executa a função renderSignal e passa como parametro nossa props signalColor */}
      <img className="signal" src={renderSignal(signalColor)} alt="" />
    </div>
  );
};

// Para passar nosso estado global para o componente temos que usar a função mapStateToProps.
// Recebe state como parametro, pode ser qualquer nome, por convenção usamos state.
// Essa função retorna pra gente um objeto. 
const mapStateToProps = (state) => ({
  // As chaves do objeto serão os estados que serão passados como props para o nosso componente.
  // Usamos o parametro que passamos state, e ele vai estar recebendo o que passamos no nosso reducer, que no caso é o initialState(redux/index.js) por enquanto, já que não disparamos nenhuma action inicialmente.
  // redux/index.js -> const initialState = { signal: { color: 'red', },}
  signalColor: state.trafficReducer.signal.color
});

// Utilizaremos a mapDispatchToProps para despachar/disparar nossa action para o componente
const mapDispatchToProps = { changeSignal }


TrafficSignal.propTypes = {
  changeSignal: PropTypes.func.isRequired,
  signalColor: PropTypes.string.isRequired,
};


// Realizo a conexão entre o mapStateToProps com a mapDispatchToProps
// 1o parenteses passo o State e o Dispatch
// 2o parenteses passo o nome do componente 
export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);