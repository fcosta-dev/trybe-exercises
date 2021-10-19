-- 14 - Considerando o conjunto formado pelas pessoas consumidoras e empresas fornecedoras de produtos, queremos saber quais são os cinco primeiros países distintos, em ordem alfabética, presentes nesse conjunto
SELECT Country AS 'País' FROM customers
UNION
SELECT Country AS 'País' FROM suppliers
ORDER BY `País`
LIMIT 5;


