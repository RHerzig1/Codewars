-- Write a query that returns the a list of each employee and their primary department.

SELECT
  employee_id,
  department_id
FROM
  employee e1
WHERE
  primary_flag = 'Y'
  OR (
    SELECT
      COUNT(1)
    FROM
      employee e2
    WHERE
      e1.employee_id = e2.employee_id
  ) = 1
GROUP BY
  employee_id;

/*
Input: 
Employee table:
+-------------+---------------+--------------+
| employee_id | department_id | primary_flag |
+-------------+---------------+--------------+
| 1           | 1             | N            |
| 2           | 1             | Y            |
| 2           | 2             | N            |
| 3           | 3             | N            |
| 4           | 2             | N            |
| 4           | 3             | Y            |
| 4           | 4             | N            |
+-------------+---------------+--------------+

Output: 
+-------------+---------------+
| employee_id | department_id |
+-------------+---------------+
| 1           | 1             |
| 2           | 1             |
| 3           | 3             |
| 4           | 3             |
+-------------+---------------+

Explanation: 
- The Primary department for employee 1 is 1.
- The Primary department for employee 2 is 1.
- The Primary department for employee 3 is 3.
- The Primary department for employee 4 is 3.
 */
/*
 Employees who are a part of multiple departments will always have a single record where primary_flag = 'Y'.
 Employees of single departments will only have a single record. It will have a primary_flag value of 'N'.
 */