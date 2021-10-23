// 2 - Retorne os 10 primeiros documentos com voos da empresa AZUL.
db.voos.find(
  { "empresa.nome": "AZUL" },
).limit(10);
