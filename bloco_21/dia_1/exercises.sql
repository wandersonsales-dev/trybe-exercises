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
-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT
  SUM(SALARY)
FROM
  hr.employees;
-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT
  ROUND(MAX(SALARY), 2),
  ROUND(MIN(SALARY), 2),
  ROUND(SUM(SALARY), 2),
  ROUND(AVG(SALARY), 2)
FROM
  hr.employees;
-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
SELECT
  JOB_ID,
  COUNT(*)
FROM
  hr.employees
GROUP BY
  JOB_ID
HAVING
  JOB_ID = 'IT_PROG';