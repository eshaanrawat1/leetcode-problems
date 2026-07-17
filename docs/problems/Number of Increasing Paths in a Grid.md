---
date: 2024-12-06
difficulty: Hard
num: 2328
related_topics:
  - Array
  - BFS
  - DFS
  - Dynamic Programming
  - Graph
  - Matrix
  - Memoization
  - Topological Sort
return: Done
---

# Problem: 2328. Number Of Increasing Paths In A Grid

## Description

## Approach / Thoughts
top down dp with memo

## Solution
```python
class Solution:
    def countPaths(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        dp = [[-1] * n for _ in range(m)]

        def in_bounds(r, c):
            return 0 <= r < m and 0 <= c < n
        
        def dfs(r, c):
            if dp[r][c] != -1:
                return dp[r][c]

            res = 1
            for nr, nc in [[r+1, c], [r-1, c], [r, c+1], [r, c-1]]:
                if in_bounds(nr, nc) and grid[nr][nc] > grid[r][c]:
                    res += dfs(nr, nc)

            dp[r][c] = res
            return res

        ans = 0
        for r in range(m):
            for c in range(n):
                ans += dfs(r, c)
        return ans % (10 ** 9 + 7)
```
