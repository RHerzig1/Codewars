-- Count of daily active users.

SELECT
    TO_CHAR(activity_date, 'YYYY-MM-DD') AS DAY,
    COUNT(DISTINCT user_id) AS active_users
FROM
    activity
WHERE
    activity_date BETWEEN TO_DATE('2019-07-27') - 29
    AND TO_DATE('2019-07-27')
GROUP BY
    activity_date;

-- https://leetcode.com/problems/user-activity-for-the-past-30-days-i