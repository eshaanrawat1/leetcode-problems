---
date: 2025-01-16
difficulty: Hard
num: 1463
related_topics:
  - Array
  - Dynamic Programming
  - Matrix
return: Done
---

# Problem: 1463. Cherry Pickup Ii

## Description
same, robots pick, avoid duplicates

## Approach / Thoughts
pairs of all positions top down dp

account for same cell

## Solution
```python
class Solution:
    def cherryPickup(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        dp = [[[-inf] * n for _ in range(n)] for _ in range(m)]

        def dfs(r, c1, c2):
            if r == m:
                return 0
            if dp[r][c1][c2] != -inf:
                return dp[r][c1][c2]

            dir1 = [c1-1, c1, c1+1]
            dir2 = [c2-1, c2, c2+1]

            res = 0
            val = grid[r][c1] + grid[r][c2]

            if c1 == c2:
                val = grid[r][c1]

            nr = r + 1
            for nc1 in dir1:
                for nc2 in dir2:
                    if 0 <= nc1 < n and 0 <= nc2 < n:  
                        res = max(res, val + dfs(nr, nc1, nc2))

            dp[r][c1][c2] = res
            return res

        return dfs(0, 0, n-1)
```
