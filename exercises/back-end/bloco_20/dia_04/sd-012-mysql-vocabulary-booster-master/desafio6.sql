-- 6 - Faça um relatório que mostra o histórico de cargos das pessoas empregadas
SELECT 
  CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) 'Nome completo',
  j.JOB_TITLE Cargo,
  jh.START_DATE 'Data de início do cargo',
  d.DEPARTMENT_NAME 'Departamento'
FROM hr.job_history jh
INNER JOIN hr.employees e
ON jh.EMPLOYEE_ID = e.EMPLOYEE_ID
INNER JOIN hr.jobs j
ON j.JOB_ID = jh.JOB_ID
INNER JOIN hr.departments d
ON d.DEPARTMENT_ID = jh.DEPARTMENT_ID
ORDER BY `Nome completo` DESC, Cargo;
