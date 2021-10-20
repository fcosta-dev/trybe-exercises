-- Exercício 1: Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ) adicionando-o na coluna name . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan , como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.

-- Após ter criado o índice, mensure o custo com a seguinte query:
CREATE FULLTEXT INDEX category_name_index ON category(name);
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');
-- RESPOSTA: 5ms


-- Após ter excluído o índice, mensure o custo com a seguinte query:
DROP INDEX category_name_index ON category;
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
-- RESPOSTA: 3ms