-- Query the user who has the most friends.

WITH users AS (
    SELECT
        DISTINCT requester_id AS id
    FROM
        requestaccepted
    UNION
    SELECT
        DISTINCT accepter_id AS id
    FROM
        requestaccepted
    ORDER BY id
), friends AS (
    SELECT
        id,
        (SELECT COUNT(1) FROM requestaccepted WHERE requester_id = id) AS requests_accepted,
        (SELECT COUNT(1) FROM requestaccepted WHERE accepter_id = id) AS accepted_requests
    FROM
        users
), totalfriends AS (
    SELECT
        ROW_NUMBER() OVER (ORDER BY requests_accepted + accepted_requests DESC) AS rank,
        id,
        requests_accepted,
        accepted_requests,
        requests_accepted + accepted_requests AS total_friends
    FROM
        friends
    ORDER BY total_friends
)

SELECT
    id,
    total_friends AS num
FROM
    totalfriends
WHERE
    rank = 1;

-- https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends