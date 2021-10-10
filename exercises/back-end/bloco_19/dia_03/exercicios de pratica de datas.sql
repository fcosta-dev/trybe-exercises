select * from sakila.payment;
select * from sakila.payment where date(payment_date) = '2005-07-31';
select * from sakila.payment where date(payment_date) = '2005-07-31%';
-- Quantos pagamentos temos com a data de retorno 2005-05-25 ? Há múltiplas maneiras possíveis de encontrar a resposta.
select * from sakila.payment where date(payment_date) = '2005-05-25';
-- Quantos pagamentos foram feitos entre 01/07/2005 e 22/08/2005 ?
select * from sakila.payment where payment_date between '2005-07-01' and '2005-08-22';
-- Usando a tabela rental , extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330. Utilize a coluna rental_date para extrair as informações.
select
 rental_date as 'Estrutura',
 (date(rental_date)) as 'Data',
 (year(rental_date)) as 'Ano',
 (month(rental_date)) as 'Mês',
 (day(rental_date)) as 'Dia',
 (minute(rental_date)) as 'Minutos',
 (second(rental_date)) as 'Segundos'
 from sakila.rental where rental_id = '10330';