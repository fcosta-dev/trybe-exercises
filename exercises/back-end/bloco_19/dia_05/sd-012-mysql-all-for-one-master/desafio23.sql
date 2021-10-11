-- 23 - Atualize os dados da coluna discount da tabela order_details para 30, onde o valor na coluna unit_price seja menor que 10.0000.
-- Observações técnicas
-- Não é necessário utilizar o SAFE UPDATE em sua query.

update northwind.order_details
set discount = 30
where unit_price < 10.0000;
