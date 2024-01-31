-- Write a script that queries two tables using GROUP and HAVING.

SELECT age, COUNT(age) AS total_people
FROM people
GROUP BY age
HAVING COUNT(age) >= 10;