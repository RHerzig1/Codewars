-- Write a query that returns the second highest salary.

SELECT
  MAX(Salary) AS SecondHighestSalary
FROM
  Employee
WHERE
  Salary < (
    SELECT
      MAX(Salary)
    FROM
      Employee
  )
  
  /*
   Example 1:
   
   Input: 
   Employee table:
   +----+--------+
   | id | salary |
   +----+--------+
   | 1  | 100    |
   | 2  | 200    |
   | 3  | 300    |
   +----+--------+

   Output: 
   +---------------------+
   | SecondHighestSalary |
   +---------------------+
   | 200                 |
   +---------------------+

   Example 2:
   
   Input: 
   Employee table:
   +----+--------+
   | id | salary |
   +----+--------+
   | 1  | 100    |
   +----+--------+

   Output: 
   +---------------------+
   | SecondHighestSalary |
   +---------------------+
   | null                |
   +---------------------+
   */
  /*
   
   */