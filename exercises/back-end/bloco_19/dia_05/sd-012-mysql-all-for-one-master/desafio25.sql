-- 25 - Delete todos os dados em que a unit_price da tabela order_details seja menor que 10.0000.
delete from northwind.order_details
where unit_price < 10.0000;
