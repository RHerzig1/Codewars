-- Write a script that queries for authors who have read their own articles.

SELECT
  DISTINCT author_id AS id
FROM
  VIEWS
WHERE
  author_id = viewer_id
ORDER BY
  author_id;

/*
 Example 1:
 
 Input: 
 Views table:
 +------------+-----------+-----------+------------+
 | article_id | author_id | viewer_id | view_date  |
 +------------+-----------+-----------+------------+
 | 1          | 3         | 5         | 2019-08-01 |
 | 1          | 3         | 6         | 2019-08-02 |
 | 2          | 7         | 7         | 2019-08-01 |
 | 2          | 7         | 6         | 2019-08-02 |
 | 4          | 7         | 1         | 2019-07-22 |
 | 3          | 4         | 4         | 2019-07-21 |
 | 3          | 4         | 4         | 2019-07-21 |
 +------------+-----------+-----------+------------+
 Output: 
 +------+
 | id   |
 +------+
 | 4    |
 | 7    |
 +------+
 */
/*
 A table containing article information, including author_id and viewer_id.
 Return the author_id when it matches the viewer_id.
 
 Only return distinct ids.
 Name the column header "id".
 Sort in ascending order.
 */