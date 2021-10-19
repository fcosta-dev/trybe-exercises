-- 15 - 
-- Crie uma procedure chamada buscar_media_por_cargo,
-- que recebe como parâmetro o nome de um cargo,
--  e em retorno deve mostrar a média salarial de todas as pessoas que possuem esse cargo

DELIMITER $$

CREATE PROCEDURE buscar_media_por_cargo(IN cargo VARCHAR(50))
BEGIN
	SELECT ROUND(AVG(e.SALARY), 2) AS 'Média salarial'
    FROM employees AS e
    JOIN jobs AS j
    ON e.JOB_ID = j.JOB_ID
    WHERE JOB_TITLE = cargo;
END $$

DELIMITER ;