---
date: 2024-12-22
difficulty: Hard
num: 2435
related_topics:
  - Array
  - Dynamic Programming
  - Matrix
return: Done
---

# Problem: 2435. Paths In Matrix Whose Sum Is Divisible By K

## Description

## Approach / Thoughts
matrix dp + remainder mod dp

## Solution
```python
class Solution:
    def numberOfPaths(self, grid: List[List[int]], k: int) -> int:
        m, n = len(grid), len(grid[0])

        def in_bounds(r, c):
            return 0 <= r < m and 0 <= c < n

        dp = [[[-1] * k for _ in range(n)] for _ in range(m)]

        def dfs(r, c, mod):
            if r == m - 1 and c == n - 1:
                mod += (grid[r][c] % k)
                return (mod == 0 or mod % k == 0)

            if dp[r][c][mod] != -1:
                return dp[r][c][mod]

            res, val = 0, grid[r][c] % k
            for nr, nc in [[r+1, c], [r, c+1]]:
                if in_bounds(nr, nc):
                    res += dfs(nr, nc, (val + mod) % k)
            dp[r][c][mod] = res
            return res
        return dfs(0, 0, 0) % (10 ** 9 + 7)
```
