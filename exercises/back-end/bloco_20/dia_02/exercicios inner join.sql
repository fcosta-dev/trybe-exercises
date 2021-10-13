-- Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
select * from sakila.actor;
select * from sakila.film_actor;

select a.actor_id, a.first_name, f.film_id
from sakila.actor as a
inner join sakila.film_actor as f
on a.actor_id = f.actor_id;

-- Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
select * from sakila.staff;
select * from sakila.address;

select s.first_name, s.last_name, s.address_id, a.address
from sakila.staff as s
inner join sakila.address as a
on s.address_id = a.address_id;

