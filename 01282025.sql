-- Query a BST table and return Root, Leaf, or Inner for each node.

SELECT
    n,
    CASE
        WHEN p IS NULL THEN 'Root'
        WHEN NOT EXISTS (
            SELECT
                1
            FROM
                bst b2
            WHERE
             b1.n = b2.p
        ) THEN 'Leaf'
        ELSE 'Inner'
    END AS type
FROM
    bst b1
ORDER BY
    n;

-- https://www.hackerrank.com/challenges/binary-search-tree-1