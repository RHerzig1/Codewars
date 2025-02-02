-- Query the top 3 salaries of each department.

WITH cte AS (
    SELECT
        DENSE_RANK() OVER (PARTITION BY departmentid ORDER BY salary DESC) AS rank,
        employee.id,
        employee.name AS employeeName,
        salary,
        departmentid,
        department.name AS departmentName
    FROM
        employee
    LEFT JOIN
        department
    ON
        employee.departmentid  = department.id;
)

SELECT
    departmentName AS department,
    employeeName AS employee,
    salary
FROM
    cte
WHERE
    rank <= 3;

-- https://leetcode.com/problems/department-top-three-salaries