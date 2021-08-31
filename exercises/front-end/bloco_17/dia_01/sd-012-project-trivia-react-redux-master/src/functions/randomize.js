const randomize = (length, qtd) => {
  const random = [];
  while (random.length < length) {
    const randomNumber = Math.round(Math.random() * qtd);
    if (!random.includes(randomNumber)) {
      random.push(randomNumber);
    }
  }
  return random;
};

export default randomize;
