---
date: 2025-01-27
difficulty: Medium
num: 2658
related_topics:
  - Array
  - BFS
  - DFS
  - Matrix
  - Union Find
return: Done
---

# Problem: 2658. Maximum Number Of Fish In A Grid

## Description
max sum of any island

## Approach / Thoughts
dfs

## Solution
```python
class Solution:
    def findMaxFish(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])

        def dfs(r, c):
            if not (0 <= r < m and 0 <= c < n):
                return 0

            if grid[r][c] <= 0:
                return 0

            val = grid[r][c]
            grid[r][c] = -1
            return val + dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1)

        res = 0
        for i in range(m):
            for j in range(n):
                res = max(res, dfs(i, j))
        return res
```
