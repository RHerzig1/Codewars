-- Write a query that returns a list of employees and joins there bonus.

SELECT
  NAME,
  bonus
FROM
  employee
  LEFT JOIN bonus ON employee.empid = bonus.empid
WHERE
  (
    bonus < 1000
    OR bonus IS NULL
  );

/*
 Input: 
 
 Employee table:
 +-------+--------+------------+--------+
 | empId | name   | supervisor | salary |
 +-------+--------+------------+--------+
 | 3     | Brad   | null       | 4000   |
 | 1     | John   | 3          | 1000   |
 | 2     | Dan    | 3          | 2000   |
 | 4     | Thomas | 3          | 4000   |
 +-------+--------+------------+--------+
 
 Bonus table:
 +-------+-------+
 | empId | bonus |
 +-------+-------+
 | 2     | 500   |
 | 4     | 2000  |
 +-------+-------+
 
 Output: 
 +------+-------+
 | name | bonus |
 +------+-------+
 | Brad | null  |
 | John | null  |
 | Dan  | 500   |
 +------+-------+
 */
/*
 Two tables that share empId keys. Employee and Bonus.
 Query name and bonus for each employee with a bonus less than 1000.
 
 Query name from Employee and bonus
 Join Bonus on empId = empId and bonus < 1000
 */