// 10 - Retorne apenas os 10 primeiros documentos com voos da empresa GOL do ano de 2017. Exiba apenas os campos vooId, empresa.nome, aeroportoOrigem.nome, aeroportoDestino.nome, mes e ano.
db.voos.find(
  { "empresa.nome": "GOL", ano: 2017 },
  { 
    _id: 0,
    vooId: 1,
    "empresa.nome": 1,
    "aeroportoOrigem.nome": 1,
    "aeroportoDestino.nome": 1,
    mes: 1,
    ano: 1,
  },
).limit(10);
