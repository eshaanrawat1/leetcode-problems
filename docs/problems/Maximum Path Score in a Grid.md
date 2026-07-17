---
date: 2025-11-14
difficulty: Medium
num: 3742
related_topics:
  - Array
  - Dynamic Programming
  - Matrix
return: Done
---

# Problem: 3742. Maximum Path Score In A Grid

## Description
same, cost and score, cost cannot exceed k

## Approach / Thoughts
dfs memo

## Solution
```python
class Solution:
    def maxPathScore(self, grid: List[List[int]], k: int) -> int:
        m, n = len(grid), len(grid[0])

        def in_bounds(r, c):
            return 0 <= r < m and 0 <= c < n


        val_map = {0: 0, 1: 1, 2: 1}

        @lru_cache(None)
        def dfs(r, c, cost):
            if cost > k:
                return -inf
                
            if (r, c) == (m-1, n-1):
                val = grid[r][c]
                return -inf if cost > k else val

            res = -inf
            val = grid[r][c]

            for nr, nc in [[r+1, c], [r, c+1]]:
                if in_bounds(nr, nc):
                    nxt_val = grid[nr][nc]
                    res = max(res, val + dfs(nr, nc, cost + val_map[nxt_val]))
            return res

        res = dfs(0, 0, 0)
        return res if res != -inf else -1
```
