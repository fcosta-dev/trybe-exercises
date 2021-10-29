// 13 - Retorne a quantidade de documentos em que o campo aeroportoDestino.continente não seja igual a EUROPA, ÁSIA e OCEANIA.
db.voos.find(
  { "aeroportoDestino.continente": { $nin: ["EUROPA", "ÁSIA", "OCEANIA"] } },
).count();
