SELECT t1.title, t1.replacement_cost, t1.length, t2.title, t2.replacement_cost, t2.length
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length;

-- Exercício 1: Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
SELECT 
    A.film_id, A.replacement_cost, B.film_id, B.replacement_cost
FROM
    sakila.film AS A,
    sakila.film AS B
WHERE
    A.replacement_cost = B.replacement_cost;
    
-- Exercício 2: Exiba o titulo e a duração de empréstimo dos filmes que possuem a mesma duração ( length ). Exiba apenas os filmes com a duração de empréstimo entre 2 a 4 dias.
SELECT 
    A.title, A.rental_duration, B.title, B.rental_duration
FROM
    sakila.film AS A,
    sakila.film AS B
WHERE
    A.rental_duration = B.rental_duration
HAVING A.rental_duration BETWEEN 2 AND 4;
