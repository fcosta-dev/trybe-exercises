--  7 - Mostre apenas os ids dos 5 últimos registros da tabela products (a ordernação deve ser baseada na coluna id).

SELECT id FROM northwind.products
ORDER BY id DESC
LIMIT 5;
