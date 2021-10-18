-- 7 - Faça um relatório que mostra o histórico de cargos das pessoas empregadas que iniciaram seus cargos nos meses de janeiro, fevereiro ou março
SELECT 
	UPPER(CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME)) AS 'Nome completo',
  j.START_DATE AS 'Data de início',
  e.SALARY AS 'Salário'
FROM hr.job_history AS j
INNER JOIN hr.employees AS e
ON e.EMPLOYEE_ID = j.EMPLOYEE_ID
WHERE month(START_DATE) IN (1, 2, 3)
ORDER BY `Nome completo`, `Salário`;
