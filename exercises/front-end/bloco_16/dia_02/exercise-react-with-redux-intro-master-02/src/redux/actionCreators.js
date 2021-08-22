export const MOVE_CAR = 'MOVE_CAR';

// Cria uma action que recebe como parametro um valor
// Os valores serão: red, yellow, green
// Conforme valor recebido de parametro, passa o type e a cor
export const moveCar = (car, side) => ({
  type: MOVE_CAR,
  car,
  side,
});

