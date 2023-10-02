-- Write a query that returns the a list of managers with the number of employees that report to them and their average age.

SELECT
  e1.employee_id,
  e1.name,
  COUNT(e2.employee_id) AS reports_count,
  ROUND(AVG(e2.age)) AS average_age
FROM
  employees e1
  INNER JOIN employees e2 ON e1.employee_id = e2.reports_to
GROUP BY
  e1.employee_id
ORDER BY
  e1.employee_id;

/*
 Input: 
 Employees table:
 +-------------+---------+------------+-----+
 | employee_id | name    | reports_to | age |
 +-------------+---------+------------+-----+
 | 9           | Hercy   | null       | 43  |
 | 6           | Alice   | 9          | 41  |
 | 4           | Bob     | 9          | 36  |
 | 2           | Winston | null       | 37  |
 +-------------+---------+------------+-----+
 
 Output: 
 +-------------+-------+---------------+-------------+
 | employee_id | name  | reports_count | average_age |
 +-------------+-------+---------------+-------------+
 | 9           | Hercy | 2             | 39          |
 +-------------+-------+---------------+-------------+
 
 Explanation: Hercy has 2 people report directly to him, Alice and Bob. Their average age is (41+36)/2 = 38.5, which is 39 after rounding it to the nearest integer.
 */
/*
 Count the number of products in the product table.
 Compare it to the number of unique items per customer.
 */