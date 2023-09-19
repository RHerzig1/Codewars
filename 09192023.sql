-- Write a query that returns the average years of employee experience for each project.

SELECT
  project_id,
  ROUND(SUM(employee.experience_years) / COUNT(employee.employee_id), 2) AS average_years
FROM
  project
  LEFT JOIN employee on project.employee_id = employee.employee_id
GROUP BY
  project_id;

/*
Input: 

Project table:
+-------------+-------------+
| project_id  | employee_id |
+-------------+-------------+
| 1           | 1           |
| 1           | 2           |
| 1           | 3           |
| 2           | 1           |
| 2           | 4           |
+-------------+-------------+

Employee table:
+-------------+--------+------------------+
| employee_id | name   | experience_years |
+-------------+--------+------------------+
| 1           | Khaled | 3                |
| 2           | Ali    | 2                |
| 3           | John   | 1                |
| 4           | Doe    | 2                |
+-------------+--------+------------------+

Output: 
+-------------+---------------+
| project_id  | average_years |
+-------------+---------------+
| 1           | 2.00          |
| 2           | 2.50          |
+-------------+---------------+

Explanation: The average experience years for the first project is (3 + 2 + 1) / 3 = 2.00 and for the second project is (3 + 2) / 2 = 2.50
 */
/*
 Project and Employee tables. Project contains a project_id and a record for each employee_id who is assigned that project. Employee has the unique employee_id and experience_years.
 Return the unique project_id and the average number of years (rounded to 2 digits) as average_years. List can be in any order.

 Select from the projects table.
 Join the employees table.
 */