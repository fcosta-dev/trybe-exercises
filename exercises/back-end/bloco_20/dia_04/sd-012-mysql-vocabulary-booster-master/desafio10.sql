-- 10 - Exibe todos os produtos que já foram pedidos, que possuem uma média de quantidade nos pedidos registrados acima de 20.00
SELECT 
  p.ProductName AS 'Produto',
  MIN(o.Quantity) AS 'Mínima',
  MAX(o.Quantity) AS 'Máxima',
  ROUND(AVG(o.Quantity), 2) AS 'Média'
FROM order_details AS o
INNER JOIN products AS p
ON p.ProductID = o.ProductID
GROUP BY `Produto`
HAVING `Média` > 20.00
ORDER BY `Média`, `Produto`;
