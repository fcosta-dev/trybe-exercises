-- 18 - Faça um relatório que mostra o histórico de cargos das pessoas empregadas, mostrando as datas de início e de saída, assim como os anos que ela ficou nesse cargo
SELECT 
  CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS 'Nome completo',
  DATE_FORMAT(jh.START_DATE, '%d/%m/%Y') AS 'Data de início',
  DATE_FORMAT(jh.END_DATE, '%d/%m/%Y') AS 'Data de rescisão',
  ROUND(DATEDIFF(jh.END_DATE, START_DATE) / 365, 2) AS 'Anos trabalhados'
FROM
  hr.employees AS e
  INNER JOIN hr.job_history AS jh 
  ON jh.EMPLOYEE_ID = e.EMPLOYEE_ID
ORDER BY `Nome completo` , `Anos trabalhados`;