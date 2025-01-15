-- Count the followers for each user.

SELECT
    user_id,
    COUNT(user_id) AS followers_count
FROM
    followers
GROUP BY
    user_id
ORDER BY
    user_id;

-- https://leetcode.com/problems/find-followers-count