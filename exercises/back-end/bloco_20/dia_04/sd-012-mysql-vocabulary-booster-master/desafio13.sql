-- 13 - Exibe todos produtos que já tiveram um pedido associado requerindo uma quantidade desse produto maior que 80
SELECT
	p.ProductName AS 'Produto',
  p.Price AS 'Preço'
FROM 
	w3schools.order_details AS o
INNER JOIN
	w3schools.products AS p
	ON p.ProductID = o.ProductID
WHERE
	o.Quantity > 80
ORDER BY
	`Produto`;
  