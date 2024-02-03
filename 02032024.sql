-- Write a script that queries two tables using JOIN.

SELECT p.*, c.name AS company_name
FROM products p
LEFT JOIN companies c
ON p.company_id = c.id;