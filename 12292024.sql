-- Calculate the average experience years of employees for each project.

SELECT project_id, ROUND(SUM(experience_years) / COUNT(experience_years), 2) AS average_years
FROM project p
LEFT JOIN employee e
ON p.employee_id = e.employee_id
GROUP BY project_id;

-- https://leetcode.com/problems/project-employees-i