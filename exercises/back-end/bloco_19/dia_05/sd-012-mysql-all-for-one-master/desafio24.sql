-- 24 - Atualize os dados da coluna discount da tabela order_details para 45, onde o valor na coluna unit_price seja maior que 10.0000 e o id seja um número entre 30 e 40.
-- Observações técnicas
-- Não é necessário utilizar o SAFE UPDATE em sua query.
update northwind.order_details
set discount = 45
where unit_price > 10.0000 and id BETWEEN 30 and 40;
