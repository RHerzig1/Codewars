-- Query each employee and their primary department.

WITH cte AS (
    SELECT
        employee_id,
        department_id,
        CASE
            WHEN COUNT(employee_id) OVER(PARTITION BY employee_id) > 1 THEN primary_flag
            ELSE 'Y'
        END AS primary_flag
    FROM
        employee
)

SELECT
    employee_id, department_id
FROM
    cte
WHERE
    primary_flag = 'Y';

-- https://leetcode.com/problems/primary-department-for-each-employee