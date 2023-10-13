-- Write a query that returns the person with the most friends on their social media.

WITH base AS (
  SELECT
    requester_id id
  FROM
    RequestAccepted
  UNION
  ALL
  SELECT
    accepter_id id
  FROM
    RequestAccepted
)
SELECT
  id,
  COUNT(*) num
FROM
  table1
GROUP BY
  1
ORDER BY
  2 DESC
LIMIT
  1
  
  /*
   Input: 
   RequestAccepted table:
   +--------------+-------------+-------------+
   | requester_id | accepter_id | accept_date |
   +--------------+-------------+-------------+
   | 1            | 2           | 2016/06/03  |
   | 1            | 3           | 2016/06/08  |
   | 2            | 3           | 2016/06/08  |
   | 3            | 4           | 2016/06/09  |
   +--------------+-------------+-------------+
   
   Output: 
   +----+-----+
   | id | num |
   +----+-----+
   | 3  | 3   |
   +----+-----+
   
   Explanation: 
   The person with id 3 is a friend of people 1, 2, and 4, so he has three friends in total, which is the most number than any others.
   */
  /*
   Add the friends the users accepted, as well as the requests that others accepted. Compare the sums and return the max.
   */