-- 9 - Mostre todos os valores de notes da tabela purchase_orders que não são nulos.
SELECT notes FROM northwind.purchase_orders
WHERE notes is not null;
