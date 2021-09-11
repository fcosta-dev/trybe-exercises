// importa o useState e o useEffect
import { useState, useEffect } from 'react';

const useTimer = () => {
  // Cria o getter e o setter do Timer, com valor inicial 0
  const [timer, setTimer] = useState(0);
  // Cria o getter e o setter do RandomNumber, com valor inicial nulo
  const [randomNumber, setRandomNumber] = useState(null);

  // o numero aleatório tem que ter no mínimo 1 e no máximo 100
  const MIN = 1;
  const MAX = 100;

  // Definimos 1 segundo de intervalo
  const ONE_SECOND = 1000;

  // Definimos que vai ser a cada 10 segundos
  const REMAINDER_TEN = 10;

  // Como princípio do SOLID, o useEffect vai realizar uma função apenas. Caso precise de mais algo, será criado um novo useEffect para a nova função
  
  useEffect(() => {
    const timeInterval = setInterval(() => {
      const newTimer = timer + 1;
      const mod10 = newTimer > 0 && newTimer % REMAINDER_TEN;

      // Nos múltiplos de 10 do timer, um novo número aleatório é gerado
      if (mod10 === 0) {
        setRandomNumber(Math.round(Math.random() * (MAX - MIN) + MIN));
      }

      setTimer(newTimer);
    }, ONE_SECOND);

    return () => {
      clearInterval(timeInterval);
    };
  }, [timer]);

  const REMAINDER_THREE = 3;
  const REMAINDER_FIVE = 5;
  const FOUR_SECONDS = 4000;
  const isMultiple = randomNumber
    && (randomNumber % REMAINDER_THREE === 0 || randomNumber % REMAINDER_FIVE === 0);

  useEffect(() => {
    if (isMultiple) {
      setTimeout(() => {
        setRandomNumber(null);
      }, FOUR_SECONDS);
    }
  }, [randomNumber, isMultiple]);

  return {
    timer,
    randomNumber,
    isMultiple,
  };
};

export default useTimer;