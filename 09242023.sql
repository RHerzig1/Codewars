-- Write a query that returns the fraction of players who play again the day immediately following their first event.

SELECT
  ROUND(
    COUNT(DISTINCT player_id) / (
      SELECT
        COUNT(DISTINCT player_id)
      FROM
        Activity
    ),
    2
  ) AS fraction
FROM
  activity
WHERE
  (player_id, SUBDATE(event_date, 1)) IN (
    SELECT
      player_id,
      MIN(event_date)
    FROM
      activity
    GROUP BY
      player_id
  );

/*
 Input: 
 Activity table:
 +-----------+-----------+------------+--------------+
 | player_id | device_id | event_date | games_played |
 +-----------+-----------+------------+--------------+
 | 1         | 2         | 2016-03-01 | 5            |
 | 1         | 2         | 2016-03-02 | 6            |
 | 2         | 3         | 2017-06-25 | 1            |
 | 3         | 1         | 2016-03-02 | 0            |
 | 3         | 4         | 2018-07-03 | 5            |
 +-----------+-----------+------------+--------------+
 
 Output: 
 +-----------+
 | fraction  |
 +-----------+
 | 0.33      |
 +-----------+
 
 Explanation: 
 Only the player with id 1 logged back in after the first day he had logged in so the answer is 1/3 = 0.33
 */
/*
 Player_id and event_date are the primary key.
 Return the fraction of players who play again the day following their first event. Round to 2 decimal places.
 
 
 */