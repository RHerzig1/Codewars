-- Return a list of invalid tweets.

SELECT tweet_id FROM tweets
WHERE LENGTH(content) > 15;

-- https://leetcode.com/problems/invalid-tweets