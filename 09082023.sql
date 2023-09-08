-- Write a script that queries employee information, replacing the employee name with a unique identifier.

SELECT
  employeeuni.unique_id,
  employees.name
FROM
  employeeuni
  RIGHT JOIN employees ON employeeuni.id = employees.id;

/*
 Input: 
 Employees table:
 +----+----------+
 | id | name     |
 +----+----------+
 | 1  | Alice    |
 | 7  | Bob      |
 | 11 | Meir     |
 | 90 | Winston  |
 | 3  | Jonathan |
 +----+----------+
 EmployeeUNI table:
 +----+-----------+
 | id | unique_id |
 +----+-----------+
 | 3  | 1         |
 | 11 | 2         |
 | 90 | 3         |
 +----+-----------+
 
 Output: 
 +-----------+----------+
 | unique_id | name     |
 +-----------+----------+
 | null      | Alice    |
 | null      | Bob      |
 | 2         | Meir     |
 | 3         | Winston  |
 | 1         | Jonathan |
 +-----------+----------+
 */
/*
 Two tables. One containing an employee id and name. The other id and unique id.
 Return a list of names paired with the unique ids. If no unique id exists, use null.
 
 Use the join keyword to combine the two tables.
 */