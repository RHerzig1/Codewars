-- Return numbers that appear three consecutive times.

WITH cte1 AS (
    SELECT
        id,
        num,
        LAG(num) OVER(ORDER BY id) AS num_prev
    FROM
        logs
), cte2 AS (
    SELECT
        id,
        num,
        num_prev,
        LAG(num_prev) OVER(ORDER BY id) AS num_prev_prev
    FROM
        cte1
)

SELECT
    DISTINCT num AS ConsecutiveNums 
FROM
    cte2
WHERE
    num = num_prev
    AND num_prev = num_prev_prev;

-- https://leetcode.com/problems/consecutive-numbers