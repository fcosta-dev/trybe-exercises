-- Exercício 1: Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila . Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.
CREATE VIEW film_with_categories AS
  SELECT f.title, fc.category_id, c.name
  FROM sakila.film_category fc
  INNER JOIN sakila.film f
    ON f.film_id = fc.film_id
  INNER JOIN sakila.category c
    ON fc.category_id = c.category_id
  ORDER BY f.title;
  