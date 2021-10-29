// 1. Crie uma query que adicione o campo criadoPor em todos os documentos, colocando "Ronald McDonald" no valor desse campo.
db.produtos.updateMany(
  {}, // filtro
  {
    $set: {
      criadoPor: "Ronald McDonald",
    },
  },
);

// 2. Crie uma query que retorne o nome e criadoPor de todos os produtos.
db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    criadoPor: 1,
  },
);