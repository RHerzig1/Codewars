-- Query the sum of populations in Japan.

SELECT
    SUM(population)
FROM
    city
WHERE
    countrycode = 'JPN';

-- https://www.hackerrank.com/challenges/japan-population