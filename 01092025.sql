-- Return the largest number that only appears once.

WITH cte AS (
    SELECT
        num,
        COUNT(num) AS num_count
    FROM
        mynumbers
    GROUP BY
        num
)
SELECT
    MAX(num) AS num
FROM
    cte
WHERE
    num_count = 1;

-- https://leetcode.com/problems/biggest-single-number