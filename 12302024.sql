-- Calculate the percentage of users registered in each contest.

SELECT contest_id, ROUND(COUNT(r.user_id) * 100 / total_users.total, 2) AS percentage
FROM register r
LEFT JOIN users u
ON r.user_id = u.user_id
CROSS JOIN (SELECT COUNT(user_id) AS total FROM users) total_users
GROUP BY contest_id, total
ORDER BY percentage DESC, contest_id ASC;

-- https://leetcode.com/problems/percentage-of-users-attended-a-contest