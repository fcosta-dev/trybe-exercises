-- 17 - Crie uma TRIGGER que, a cada nova inserção realizada na tabela orders, insira automaticamente a data atual na coluna OrderDate
DELIMITER $$

CREATE TRIGGER insert_order
BEFORE INSERT ON orders
FOR EACH ROW
BEGIN
  SET NEW.OrderDate = DATE(NOW());
END $$
DELIMITER ;