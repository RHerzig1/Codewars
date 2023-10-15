-- Write a query that returns a list of thte top three highest salaries of each department.

SELECT
  Dep.name AS department,
  Emp.name AS employee,
  Emp.salary AS salary
FROM
  Employee Emp,
  Department Dep
WHERE
  Emp.departmentId = Dep.id
  AND (
    SELECT
      COUNT(DISTINCT salary)
    FROM
      Employee
    WHERE
      DepartmentId = dep.Id
      AND Salary > emp.Salary
  ) < 3;

  /*
   Input: 
   Employee table:
   +----+-------+--------+--------------+
   | id | name  | salary | departmentId |
   +----+-------+--------+--------------+
   | 1  | Joe   | 85000  | 1            |
   | 2  | Henry | 80000  | 2            |
   | 3  | Sam   | 60000  | 2            |
   | 4  | Max   | 90000  | 1            |
   | 5  | Janet | 69000  | 1            |
   | 6  | Randy | 85000  | 1            |
   | 7  | Will  | 70000  | 1            |
   +----+-------+--------+--------------+
   
   Department table:
   +----+-------+
   | id | name  |
   +----+-------+
   | 1  | IT    |
   | 2  | Sales |
   +----+-------+
   
   Output: 
   +------------+----------+--------+
   | Department | Employee | Salary |
   +------------+----------+--------+
   | IT         | Max      | 90000  |
   | IT         | Joe      | 85000  |
   | IT         | Randy    | 85000  |
   | IT         | Will     | 70000  |
   | Sales      | Henry    | 80000  |
   | Sales      | Sam      | 60000  |
   +------------+----------+--------+
   
   Explanation: 
   In the IT department:
   - Max earns the highest unique salary
   - Both Randy and Joe earn the second-highest unique salary
   - Will earns the third-highest unique salary
   
   In the Sales department:
   - Henry earns the highest salary
   - Sam earns the second-highest salary
   - There is no third-highest salary as there are only two employees
   */
   /*
   
   */