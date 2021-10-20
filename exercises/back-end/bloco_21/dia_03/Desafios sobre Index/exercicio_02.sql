-- Exercício 2: Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na coluna postal_code . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo.
CREATE INDEX postal_code_index ON address(postal_code);
SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- RESPOSTA: 8ms


-- Mensure o custo com a seguinte query:
DROP INDEX postal_code_index ON address;
SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- RESPOSTA: 12ms