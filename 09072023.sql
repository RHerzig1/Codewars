-- Write a script that queries the ID of invalid Tweets.

SELECT
  tweet_id
FROM
  tweets
WHERE
  LENGTH(content) > 15;

/*
 Input: 
 Tweets table:
 +----------+----------------------------------+
 | tweet_id | content                          |
 +----------+----------------------------------+
 | 1        | Vote for Biden                   |
 | 2        | Let us make America great again! |
 +----------+----------------------------------+
 Output: 
 +----------+
 | tweet_id |
 +----------+
 | 2        |
 +----------+
 
 Explanation: 
 Tweet 1 has length = 14. It is a valid tweet.
 Tweet 2 has length = 32. It is an invalid tweet.
 */
/* 
 A table containing tweet_id (int) and content (varchar).
 Return the tweet_id (int) of tweets with content greater than 15 characters.
 */