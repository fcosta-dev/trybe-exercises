// 3 - Retorne a quantidade de voos da empresa AZUL.
db.voos.find(
  { "empresa.nome": "AZUL" },
).count();
