-- 12 - Faça um relatório que lista todas as pessoas funcionárias que possuem o mesmo cargo
SELECT
	CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS 'Nome completo funcionário 1',
  e.SALARY AS 'Salário funcionário 1',
  e.PHONE_NUMBER AS 'Telefone funcionário 1',
	CONCAT(e1.FIRST_NAME, ' ', e1.LAST_NAME) AS 'Nome completo funcionário 2',
  e1.SALARY AS 'Salário funcionário 2',
  e1.PHONE_NUMBER AS 'Telefone funcionário 2'
FROM
	employees AS e,
  employees AS e1
WHERE
	e.JOB_ID = e1.JOB_ID
	AND
  e.EMPLOYEE_ID <> e1.EMPLOYEE_ID
ORDER BY
	`Nome completo funcionário 1`,
  `Nome completo funcionário 2`;
