// 6 - Retorne apenas os campos empresa.sigla, empresa.nome e passageiros do voo com o campo vooId igual a 756807.
db.voos.find(
  { vooId: 756807 },
  { "empresa.sigla": 1, "empresa.nome": 1, passageiros: 1, _id: 0 },
);
