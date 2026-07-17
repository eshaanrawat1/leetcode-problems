---
date: 2025-12-26
difficulty: Medium
num: 2850
related_topics:
  - Array
  - BFS
  - Dynamic Programming
  - Matrix
return: Done
---

# Problem: 2850. Minimum Moves To Spread Stones Over Grid

## Description

## Approach / Thoughts
dp bitmask - dont track amount per cell, use multiple of same cell and knapsack

## Solution
```python
class Solution:
    def minimumMoves(self, grid: List[List[int]]) -> int:
        
        def dist(x1, y1, x2, y2):
            return abs(x2-x1) + abs(y2-y1)

        extra, zero = [], []
        for i in range(3):
            for j in range(3):
                for k in range(grid[i][j]-1):
                    extra.append((i, j))
                if grid[i][j] == 0:
                    zero.append((i, j))

        m, n = len(extra), len(zero)

        @lru_cache(None)
        def dfs(i, seen):
            if i >= m:
                return 0 if seen == (1 << n)-1 else inf

            res = inf

            r1, c1 = extra[i]
            for j, (r2, c2) in enumerate(zero):
                if not (1 << j) & seen:
                    take = dist(r1, c1, r2, c2) + dfs(i+1, seen | (1 << j))
                    res = min(res, take)
            return res

        return dfs(0, 0)
```
