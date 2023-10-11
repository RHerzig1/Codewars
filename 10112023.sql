-- Write a query that returns the highest rated movie and the user with the most movie reviews.

SELECT
  user_name AS results
FROM
  (
    SELECT
      b.name AS user_name,
      COUNT(*) AS counts
    FROM
      MovieRating AS A
      JOIN Users AS b ON A .user_id = b.user_id
    GROUP BY
      A .user_id
    ORDER BY
      counts DESC,
      user_name ASC
    LIMIT
      1
  ) first_query
UNION
ALL
SELECT
  movie_name AS results
FROM
  (
    SELECT
      d.title AS movie_name,
      AVG(C .rating) AS grade
    FROM
      MovieRating AS C
      JOIN Movies AS d ON C .movie_id = d.movie_id
    WHERE
      SUBSTR(C .created_at, 1, 7) = "2020-02"
    GROUP BY
      C .movie_id
    ORDER BY
      grade DESC,
      movie_name ASC
    LIMIT
      1
  ) second_query;

/*
 Input: 
 Movies table:
 +-------------+--------------+
 | movie_id    |  title       |
 +-------------+--------------+
 | 1           | Avengers     |
 | 2           | Frozen 2     |
 | 3           | Joker        |
 +-------------+--------------+
 Users table:
 +-------------+--------------+
 | user_id     |  name        |
 +-------------+--------------+
 | 1           | Daniel       |
 | 2           | Monica       |
 | 3           | Maria        |
 | 4           | James        |
 +-------------+--------------+
 MovieRating table:
 +-------------+--------------+--------------+-------------+
 | movie_id    | user_id      | rating       | created_at  |
 +-------------+--------------+--------------+-------------+
 | 1           | 1            | 3            | 2020-01-12  |
 | 1           | 2            | 4            | 2020-02-11  |
 | 1           | 3            | 2            | 2020-02-12  |
 | 1           | 4            | 1            | 2020-01-01  |
 | 2           | 1            | 5            | 2020-02-17  | 
 | 2           | 2            | 2            | 2020-02-01  | 
 | 2           | 3            | 2            | 2020-03-01  |
 | 3           | 1            | 3            | 2020-02-22  | 
 | 3           | 2            | 4            | 2020-02-25  | 
 +-------------+--------------+--------------+-------------+
 Output: 
 +--------------+
 | results      |
 +--------------+
 | Daniel       |
 | Frozen 2     |
 +--------------+
 Explanation: 
 Daniel and Monica have rated 3 movies ("Avengers", "Frozen 2" and "Joker") but Daniel is smaller lexicographically.
 Frozen 2 and Joker have a rating average of 3.5 in February but Frozen 2 is smaller lexicographically.
 */
/*
 
 */