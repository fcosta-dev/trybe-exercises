const doingThings = (func, mostragem) => {
  mostragem(func);
}

const acordar = "Acordando!!"
const beberCafe = "Bora tomar café!!"
const dormir = "Partiu dormir!!"

// Ao chamar a função doingThings:
doingThings(acordar, console.log);
doingThings(beberCafe, console.log);
doingThings(dormir, console.log);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
