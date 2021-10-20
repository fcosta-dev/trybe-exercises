-- Execute o comando abaixo para criar um índice na coluna first_name dentro da tabela actor .
CREATE INDEX index_first_name ON sakila.actor(first_name);

-- Execute a query abaixo e verique seu custo através do execution plan. Resposta: 7ms
SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

-- Agora, exclua o índice para fazer a comparação:
DROP INDEX index_first_name ON sakila.actor;

-- Veja o custo da mesma query, quando executada sem um índice na coluna first_name. Resposta: 5ms
SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';
