-- Query the sum of all total investment values in 2016.

SELECT
    ROUND(SUM(tiv_2016), 2) AS tiv_2016
FROM
    insurance i1
WHERE
    EXISTS (
        SELECT
            1
        FROM
            insurance i2
        WHERE
            i2.tiv_2015 = i1.tiv_2015
            AND i2.pid <> i1.pid
    )
    AND NOT EXISTS (
        SELECT
            1
        FROM
            insurance i2
        WHERE
            i2.lat = i1.lat
            AND i2.lon = i1.lon
            AND i2.pid <> i1.pid
    );

-- Return sum for policyholders who:
--   Have the same tiv_2015 value as one or more other policyholders.
--   Are not located in the same city as any other policyholder (i.e., the (lat, lon) attribute pairs must be unique).

-- https://leetcode.com/problems/investments-in-2016