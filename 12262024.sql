-- Calculate the user confirmation rate to the 2nd decimal.

-- WITH confirmed AS (
--     SELECT user_id, COUNT(user_id) AS confirmed_count
--     FROM signups
--     FULL OUTER JOIN confirmations
--     USING (user_id)
--     WHERE action = 'confirmed'
--     GROUP BY user_id
-- ), nonconfirmed AS (
--     SELECT user_id, COUNT(user_id) AS nonconfirmed_count
--     FROM signups
--     FULL OUTER JOIN confirmations
--     USING (user_id)
--     WHERE action = 'timeout'
--         OR action IS NULL
--     GROUP BY user_id
-- )

-- SELECT user_id,
--     CASE 
--         WHEN NVL(confirmed_count, 0) = 0 THEN 0
--         WHEN NVL(nonconfirmed_count, 0) = 0 THEN 1
--         ELSE ROUND(confirmed_count / (confirmed_count + nonconfirmed_count), 2)
--     END AS confirmation_rate
-- FROM confirmed
-- FULL OUTER JOIN nonconfirmed
-- USING (user_id);

SELECT s.user_id, ROUND(AVG(DECODE(c.action, 'confirmed', 1, 0)), 2) AS confirmation_rate
FROM signups s
LEFT JOIN confirmations c
ON s.user_id = c.user_id
GROUP BY s.user_id;

-- https://leetcode.com/problems/confirmation-rate