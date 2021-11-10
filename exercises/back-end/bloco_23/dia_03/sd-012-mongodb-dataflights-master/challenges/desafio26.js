// 26 - Remova todos os voos da empresa GOL em que a quantidade de passageiros pagos esteja entre 5 e 10, incluindo os casos em que a quantidade é 5 e 10. Informe a quantidade de documentos removidos.
db.voos.deleteMany(
  { "empresa.nome": "GOL", "passageiros.pagos": { $lte: 10, $gte: 5 } },
  { acknowledge: 0 },
);
