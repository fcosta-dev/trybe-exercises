// 18 - Retorne o vooId, mes e ano do primeiro voo com mais de 7000 passageiros pagos.
db.voos.findOne(
  { "passageiros.pagos": { $gt: 7000 } },
  { _id: 0, vooId: 1, mes: 1, ano: 1 },
);