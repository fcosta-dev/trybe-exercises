-- 8 - Exibe todas as pessoas consumidoras cujos pedidos já foram enviados pelas empresas "Speedy Express" ou "United Package"
SELECT
	c.ContactName AS 'Nome de contato',
  s.ShipperName AS 'Empresa que fez o envio',
  o.OrderDate AS 'Data do pedido'
FROM w3schools.orders AS o
INNER JOIN w3schools.customers AS c
ON c.CustomerID = o.CustomerID
INNER JOIN w3schools.shippers AS s
ON o.ShipperID = s.ShipperID
WHERE o.shipperID IN (1, 2)
ORDER BY `Nome de contato` , `Empresa que fez o envio` , `Data do pedido`;
