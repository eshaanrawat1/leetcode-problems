---
date: 2024-10-28
difficulty: Medium
num: 2684
related_topics:
  - Array
  - Dynamic Programming
  - Matrix
return: Done
---

# Problem: 2684. Maximum Number Of Moves In A Grid

## Description
longest increasing path in matrix

## Approach / Thoughts
same dfs

## Solution
```python
class Solution:
    def maxMoves(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])

        def in_bounds(r, c):
            return not (r < 0 or r >= ROWS or c < 0 or c >= COLS)

        @cache
        def dfs(r, c):
            res = 0
            for dx, dy in [[-1, 1], [0, 1], [1, 1]]:
                if in_bounds(r+dx, c+dy):
                    if grid[r+dx][c+dy] > grid[r][c]:
                        res = max(res, 1 + dfs(r+dx, c+dy))
            return res
        
        res = 0
        for r in range(ROWS):
            res = max(res, dfs(r, 0))
        return res   
```
