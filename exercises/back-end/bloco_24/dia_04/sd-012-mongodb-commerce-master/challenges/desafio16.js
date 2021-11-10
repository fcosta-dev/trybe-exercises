// 16 - Conte quantos produtos têm 4 ingredientes.
db.produtos.count(
  { ingredientes: { $size: 4 } },
);
