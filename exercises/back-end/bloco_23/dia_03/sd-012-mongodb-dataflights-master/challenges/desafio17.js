// 17 - Retorne o total de voos em que o campo natureza possui o valor Doméstica.
db.voos.find(
  { natureza: "Doméstica" },
).count();
