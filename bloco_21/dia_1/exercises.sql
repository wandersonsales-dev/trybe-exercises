-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT
  MAX(SALARY)
from
  hr.employees;
-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT
  MAX(SALARY) - MIN(SALARY)
FROM
  hr.employees;
-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT
  JOB_ID,
  AVG(SALARY) AS avg_salary
FROM
  hr.employees
GROUP BY
  JOB_ID
ORDER BY
  avg_salary DESC;