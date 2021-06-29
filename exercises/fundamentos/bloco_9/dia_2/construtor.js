// Um construtor é uma função especial que cria um objeto a partir de uma classe
// O construtor recebe uma função com dois parametros (resolve, reject)
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 11); // gera um numero

  if (number <= 5) { // se o numero for menor que 5
    return reject(number);
  }
  resolve(number);
})
.then(number => `Que sucesso =) nosso número foi ${number}`)
.then(msg => console.log(msg))
.catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`));