-- Generate a list of authors who viewed their own article.

SELECT author_id AS id FROM views
WHERE author_id = viewer_id
GROUP BY author_id
ORDER BY author_id;

-- https://leetcode.com/problems/article-views-i