-- Query employees with a bonus less than 1000.

SELECT name, bonus
FROM employee
LEFT JOIN bonus
USING (empid)
WHERE bonus < 1000
OR bonus IS NULL;

-- https://leetcode.com/problems/employee-bonus