export const CHANGE_SIGNAL = 'CHANGE_SIGNAL';
export const MOVE_CAR = 'MOVE_CAR';

// Função action para trocar o sinal do Sinaleiro
export const changeSignal = (payload) => ({
  type: CHANGE_SIGNAL,
  payload,
});

// Função action para mover o carro
export const moveCar = (car, side) => ({
  type: MOVE_CAR,
  car,
  side,
})
