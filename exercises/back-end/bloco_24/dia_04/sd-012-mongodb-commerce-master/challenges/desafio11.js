// 1 - Crie uma query que faça tanto a inserção dos elementos combo e tasty no array tags de todos os sanduíches quanto a ordenação dos elementos de tags em ordem alfabética ascendente.
db.produtos.updateMany(
  {},
  { $push: { tags: { $each: ["combo", "tasty"], $sort: 1 } } },
);

// 2 - Crie uma query que retorne o nome e tags de todos os documentos.
db.produtos.find(
  {},
  { _id: 0, nome: 1, tags: 1 },
);
