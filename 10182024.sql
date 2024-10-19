-- Update a table to swap 'm' and 'f' strings.

UPDATE salary
SET sex = CASE
    WHEN sex = 'f' THEN 'm'
    ELSE 'f'
END;

-- https://leetcode.com/problems/swap-salary/