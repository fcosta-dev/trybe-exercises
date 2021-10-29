// 1 - Crie uma query que faça a remoção do primeiro ingrediente no sanduíche Quarteirão com Queijo.
db.produtos.updateMany(
  { nome: "Quarteirão com Queijo" },
  { $pop: { ingredientes: -1 } }, // 1 último e -1 primeiro
);

// 2 - Crie uma query que retorne o nome e ingredientes de todos os documentos.
db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
