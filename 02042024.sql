-- Write a script that queries people and counts people of the same age.

SELECT age, COUNT(age) AS people_count
FROM people
GROUP BY age;