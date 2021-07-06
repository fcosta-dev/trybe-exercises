// const arrayDeTecnologias = ['CSS', 'React', 'JavaScript', 'Jest', 'HTML']

const techList = (arrayDeTecnologias, name) => {
  if (arrayDeTecnologias.length === 0) return 'Vazio!'
  const novoarray = arrayDeTecnologias
    .sort()
    .map((tecnologia) => (
      {
        tech: tecnologia,
        name,
      }
    ))
  return novoarray;
}

module.exports = techList;