-- Write a script that queries two tables using JOIN and COUNT.

SELECT p.id, p.name, COUNT(p.id) AS toy_count
FROM people p
LEFT JOIN toys t
ON p.id = t.people_id
GROUP BY p.id;