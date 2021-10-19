-- 11 - Exibe todas as pessoas clientes que possuem compatriotas, mostrando a quantidade de compatriotas para cada pessoa cliente
SELECT
	c.ContactName AS 'Nome',
  c.Country AS 'País',
  COUNT(c.Country) AS 'Número de compatriotas'
FROM 
	customers AS c,
  customers AS c1
WHERE 
	c1.Country = c.Country
  AND
  c1.CustomerID <> c.CustomerID
GROUP BY c.CustomerID
ORDER BY `Nome`;
