-- Return the most active user and the top rated movie.

-- User with greatest number of movies. In case of tie, lexicographically smaller user name.
-- Move with highest average rating in Feb 2020. In case of tie, lexicographically smaller user name.

SELECT
    name AS results
FROM
    users
JOIN
    (
        SELECT
            user_id,
            COUNT(user_id) AS user_count,
            ROW_NUMBER() OVER(ORDER BY COUNT(user_id) DESC, name) AS row_num
        FROM
            movierating
        LEFT JOIN
            users
        USING
            (user_id)
        GROUP BY
            user_id,
            name
    )
USING
    (user_id)
WHERE
    row_num = 1
GROUP BY
    user_id,
    name
UNION ALL
SELECT
    title
FROM
    movies
JOIN
    (
        SELECT
            movie_id,
            AVG(rating) AS movie_count,
            ROW_NUMBER() OVER(ORDER BY AVG(rating) DESC, title) AS row_num
        FROM
            movierating
        LEFT JOIN
            movies
        USING (movie_id)
        WHERE
            created_at BETWEEN '2020-02-01' AND '2020-02-29'
        GROUP BY
            movie_id,
            title
    )
USING
    (movie_id)
WHERE
    row_num = 1
GROUP BY
    movie_id,
    title

-- https://leetcode.com/problems/movie-rating