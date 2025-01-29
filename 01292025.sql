-- Count the employees in the company.

SELECT
  c.company_code, 
  c.founder, 
  COUNT(DISTINCT lead_manager_code), 
  COUNT(DISTINCT senior_manager_code), 
  COUNT(DISTINCT manager_code), 
  COUNT(DISTINCT employee_code) 
FROM
  company c
LEFT JOIN
  employee e 
USING
  (company_code)
GROUP BY
  c.company_code,
  c.founder;

-- https://www.hackerrank.com/challenges/the-company