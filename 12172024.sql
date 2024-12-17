-- Query names and their unique IDs.

SELECT unique_id, name FROM employees
LEFT JOIN employeeuni USING (id);

-- https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier