import PropTypes from 'prop-types';
import React from 'react';

// Importo o connect para conectar o estado global com o componente
import { connect } from 'react-redux';

// Importando imagens dos carros
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';

// Importando função action moveCar do arquivo actionCreators
import { moveCar } from './redux/actionCreators';

// É um componente funcional
function Cars({ redCar, blueCar, yellowCar, moveCar }) {
  return (
    <div>
      <div>
        <img className={redCar ? 'car-right' : 'car-left'}
          src={carRed} alt="red car"
        />
        <button onClick={() => moveCar('red', !redCar)} type="button">Move</button>
      </div>
      <div>
        <img className={blueCar ? 'car-right' : 'car-left'}
          src={carBlue} alt="blue car"
        />
        <button onClick={() => moveCar('blue', !blueCar)} type="button">Move</button>
      </div>
      <div>
        <img className={yellowCar ? 'car-right' : 'car-left'}
          src={carYellow} alt="yellow car"
        />
        <button onClick={() => moveCar('yellow', !yellowCar)} type="button">Move</button>
      </div>
    </div>
  );
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

// Passa os 3 estados para o componente Cars.
// O objeto é o parametro do componente funcional com o que está colocado no initialState da redux/index.js
const mapStateToProps = (state) => ({
  redCar: state.cars.red,
  blueCar: state.cars.blue,
  yellowCar: state.cars.yellow
});

// Aqui eu despacho a action para o componente moveCar
const mapDispatchToProps = { moveCar };

// Exporta o connect
export default connect(mapStateToProps, mapDispatchToProps)(Cars);