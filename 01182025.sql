-- Query for employees whose manager left the company.

SELECT
    employee_id
FROM
    employees e1
WHERE
    NOT EXISTS (
        SELECT
            employee_id
        FROM
            employees e2
        WHERE
            e2.employee_id = e1.manager_id
    )
    AND manager_id IS NOT NULL
    AND salary < 30000
ORDER BY
    employee_id;

-- https://leetcode.com/problems/employees-whose-manager-left-the-company