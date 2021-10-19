-- 16 - Crie uma função chamada buscar_quantidade_de_empregos_por_funcionario no banco de dados hr que, ao receber o email de uma pessoa funcionária, retorne a quantidade de empregos presentes em seu histórico
DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(employeeEmail VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
  DECLARE result INT;
  SELECT
    COUNT(jh.START_DATE)
  FROM
    hr.employees e
  INNER JOIN
    hr.job_history jh 
    ON jh.EMPLOYEE_ID = e.EMPLOYEE_ID
  WHERE
    e.EMAIL = employeeEmail
  INTO result;
  RETURN result;
END $$

DELIMITER ;