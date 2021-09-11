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
    // roda a constante executando-a de 1 em 1 segundo
    const timeInterval = setInterval(() => {
      // Início: newTimer = 0 + 1
      // Logo: newTimer = 1
      const newTimer = timer + 1;
      // Guarda na variável mod10 se:
      // newTimer é maior que zero..
      // e... o módulo de newTimer com REMAINDER_TEN que é 10
      const mod10 = newTimer > 0 && newTimer % REMAINDER_TEN;

      // Significa que, se o mod10 for 0, então quer dizer que chegou em um conjunto de 10 segundos
      // Nos múltiplos de 10 do timer, um novo número aleatório é gerado
      if (mod10 === 0) {
      // Isso significa que o random abaixo deve ser gerado, e mostrado na tela
        setRandomNumber(Math.round(Math.random() * (MAX - MIN) + MIN));
      }

      // Ajusta para o novo tempo
      setTimer(newTimer);
      // Define que será de 1 em 1 segundo
    }, ONE_SECOND);

    return () => {
      clearInterval(timeInterval);
    };
  }, [timer]);

  // Se o número for múltiplo de 3 ou 5
  const REMAINDER_THREE = 3;
  const REMAINDER_FIVE = 5;
  // A mensagem de acerto é removida 4 segundos depois de ser exibida;
  const FOUR_SECONDS = 4000;
  // Verifica se o módulo de randomNumber com 3 é zero ou
  // Verifica se o módulo de randomNumber com 5 é zero
  // Se um dos casos passar, o isMultiple é True e o useEffect abaixo vai rodar
  const isMultiple = randomNumber
    && (randomNumber % REMAINDER_THREE === 0 || randomNumber % REMAINDER_FIVE === 0);

  // Checagem se o número aleatório for múltiplo de 3 e 5    
  // useEffect(() => {}, [variável1, variável2, ... variávelN]) - Comportamento componentDidUpdate
  // O comportamento deste modelo acima será semelhante ao `componentDidUpdate` e ele será executado sempre que houver mudança em alguma das variáveis especificadas(randomNumber e isMultiple)
  useEffect(() => {
    if (isMultiple) {
      setTimeout(() => {
        setRandomNumber(null);
      // setTimeout rodando a cada 4 segundos
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