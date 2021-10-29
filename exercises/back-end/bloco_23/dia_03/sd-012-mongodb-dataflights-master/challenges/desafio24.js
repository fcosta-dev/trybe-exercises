// 24 - Retorne o vooId, empresa.nome e litrosCombustivel do primeiro voo em que litrosCombustivel não seja maior do que 600 e a empresa não seja GOL ou AZUL, e o campo litrosCombustivel exista.
db.voos.findOne(
  {
    litrosCombustivel: { $lte: 600, $exists: true },
    "empresa.nome": { $nin: ["GOL", "AZUL"] },
  },
  { _id: 0, vooId: 1, "empresa.nome": 1, litrosCombustivel: 1 },
);
