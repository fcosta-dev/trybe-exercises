-- Escreva uma query para exibir todas as peças que começam com GR .
select * from PecasFornecedores.Pecas where name like 'Gr%';
-- Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2 . Organize o resultado por ordem alfabética de fornecedor.
select * from PecasFornecedores.Fornecimentos where peca = 2 order by Fornecedor;
-- Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N .
select * from PecasFornecedores.Fornecimentos where Fornecedor like '%n%';
-- Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.
select * from PecasFornecedores.Fornecedores where name like '%Ltda' order by name DESC;
-- Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.
select count(*) from PecasFornecedores.Fornecedores where code like '%F%';
-- Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00 . Ordene os resultados por ordem crescente.
select * from PecasFornecedores.Fornecimentos where preco > '15' and preco < '40' order by preco;
-- Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019 .
select count(*) from PecasFornecedores.Vendas where order_date between '2008-04-15' and '2019-07-30';