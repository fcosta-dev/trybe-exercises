function calculaIMC(peso, altura) {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

  console.log(`IMC: ${imc}`)
}

calculaIMC(105, 176);
