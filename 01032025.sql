-- Percentage of consecutive players after first day.

WITH cte AS (
    SELECT
        ROW_NUMBER() OVER (PARTITION BY player_id ORDER BY event_date) AS row_num,
        player_id,
        MIN(event_date) OVER(PARTITION BY player_id) AS first_date,        
        LEAD(event_date) OVER(PARTITION BY player_id ORDER BY event_date) AS second_date,
        CASE MIN(event_date) OVER(PARTITION BY player_id)
            WHEN LEAD(event_date) OVER(PARTITION BY player_id ORDER BY event_date) - 1 THEN 1
            ELSE 0
        END AS isConsecutive
    FROM
        activity
)

SELECT
    (ROUND(AVG(isConsecutive), 2)) AS fraction
FROM
    cte
WHERE
    row_num = 1;

-- https://leetcode.com/problems/game-play-analysis-iv