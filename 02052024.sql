-- Write a script that queries People and Sales table using a JOIN and RANK operator.

SELECT p.id, name, COUNT(s) as sale_count, RANK() OVER (ORDER BY sum(s.price) DESC) as sale_rank
FROM people p
JOIN sales s ON s.people_id = p.id
GROUP BY p.id;