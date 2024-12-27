-- Query non-boring movies with an odd ID.

SELECT *
FROM cinema
WHERE description <> 'boring'
AND MOD(id, 2) = 1
ORDER BY rating DESC;

-- https://leetcode.com/problems/not-boring-movies