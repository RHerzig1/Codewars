-- Write a query that returns a list of managers with at least 5 direct reports.
SELECT
  e1.name
FROM
  employee e1
  LEFT JOIN employee e2 ON e1.id = e2.id
WHERE
  (
    SELECT
      COUNT(*)
    FROM
      employee e3
    WHERE
      e3.managerID = e2.id
  ) >= 5;

/*
 Input: 
 Employee table:
 +-----+-------+------------+-----------+
 | id  | name  | department | managerId |
 +-----+-------+------------+-----------+
 | 101 | John  | A          | None      |
 | 102 | Dan   | A          | 101       |
 | 103 | James | A          | 101       |
 | 104 | Amy   | A          | 101       |
 | 105 | Anne  | A          | 101       |
 | 106 | Ron   | B          | 101       |
 +-----+-------+------------+-----------+
 
 Output: 
 +------+
 | name |
 +------+
 | John |
 +------+
 */