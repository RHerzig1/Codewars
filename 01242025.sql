-- Query the sum of populations in Asia.

SELECT
    SUM(ci.population)
FROM
    city ci
LEFT JOIN
    country co
ON
    ci.countrycode = co.code
WHERE
    UPPER(continent) = 'ASIA';

-- https://www.hackerrank.com/challenges/asian-population