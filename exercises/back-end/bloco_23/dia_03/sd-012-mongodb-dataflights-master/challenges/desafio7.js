// 7 - Retorne a quantidade de voos em que o ano seja menor do que 2017.
db.voos.find(
  { ano: { $lt: 2017 } },
).count();
