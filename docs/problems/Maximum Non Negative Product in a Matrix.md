---
date: 2026-03-23
difficulty: Medium
num: 1594
related_topics:
  - Staff
  - Array
  - Dynamic Programming
  - Matrix
return:
---

# Problem:  

## Description
You are given a `m x n` matrix `grid`. Initially, you are located at the top-left corner `(0, 0)`, and in each step, you can only **move right or down** in the matrix.

Among all possible paths starting from the top-left corner `(0, 0)` and ending in the bottom-right corner `(m - 1, n - 1)`, find the path with the **maximum non-negative product**. The product of a path is the product of all integers in the grid cells visited along the path.

Return the _maximum non-negative product **modulo**_ `109 + 7`. _If the maximum product is **negative**, return_ `-1`.

Notice that the modulo is performed after getting the maximum product.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
grid dp

## Solution
```python
class Solution:
    def maxProductPath(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        mod = 10**9+7

        def in_bounds(r, c):
            return 0 <= r < m and 0 <= c < n

        @lru_cache(None)
        def dfs(r, c, prod):
            if (r, c) == (m - 1, n - 1):
                return prod

            res = -inf
            for nr, nc in [[r+1, c], [r, c+1]]:
                if in_bounds(nr, nc):
                    new_prod = (prod * grid[nr][nc])
                    res = max(res, dfs(nr, nc, new_prod))
            return res

        res = dfs(0, 0, grid[0][0]) 
        return res % mod if res >= 0 else -1
