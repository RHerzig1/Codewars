-- Write a query that returns a list of employees who's managers have left the company.

SELECT
  employee_id
FROM
  Employees
WHERE
  salary < 30000
  AND manager_id NOT IN (
    SELECT
      employee_id
    FROM
      Employees
  )
ORDER BY
  employee_id;

/*
 Input:  
 Employees table:
 +-------------+-----------+------------+--------+
 | employee_id | name      | manager_id | salary |
 +-------------+-----------+------------+--------+
 | 3           | Mila      | 9          | 60301  |
 | 12          | Antonella | null       | 31000  |
 | 13          | Emery     | null       | 67084  |
 | 1           | Kalel     | 11         | 21241  |
 | 9           | Mikaela   | null       | 50937  |
 | 11          | Joziah    | 6          | 28485  |
 +-------------+-----------+------------+--------+

 Output: 
 +-------------+
 | employee_id |
 +-------------+
 | 11          |
 +-------------+
 
 Explanation: 
 The employees with a salary less than $30000 are 1 (Kalel) and 11 (Joziah).
 Kalel's manager is employee 11, who is still in the company (Joziah).
 Joziah's manager is employee 6, who left the company because there is no row for employee 6 as it was deleted.
 */
/*
 When a manager leaves the company, their record is deleted. So we can answer the question by querying for manager_ids that aren't present in the table.
 In addition, we need to limit salary to less than 30,000.
 */