// 5 - Retorne o vooId do décimo ao décimo segundo documento da coleção voos.
db.voos.find(
  null, { vooId: 1, _id: 0 },
).limit(3).skip(9);
