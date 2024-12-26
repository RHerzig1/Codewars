-- Query managers with at least 5 direct reports.

SELECT e2.name
FROM employee e1
INNER JOIN employee e2
ON (e1.managerid = e2.id)
GROUP BY e1.managerid, e2.name
HAVING COUNT(e1.managerid) >= 5;

-- https://leetcode.com/problems/managers-with-at-least-5-direct-reports