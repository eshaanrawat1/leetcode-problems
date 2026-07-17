---
date: 2024-09-19
difficulty: Hard
num: 980
related_topics:
  - Array
  - Backtracking
  - Bit Manipulation
  - Matrix
return: Done
---

# Problem: 980. Unique Paths Iii

## Description

## Approach / Thoughts
backtracking dfs, track visit cells

## Solution
```python
class Solution:
    def uniquePathsIII(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        start_x = start_y = None
        visit = set()

        squares = 0
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 1:
                    start_x, start_y = r, c
                if grid[r][c] == 0:
                    squares += 1

        def dfs(r, c, cnt):
            if r < 0 or c < 0 or r >= ROWS or c >= COLS:
                return 0
            if grid[r][c] == 2 and cnt == squares+1:
                return 1
            if grid[r][c] == 2 or (r, c) in visit or grid[r][c] == -1:
                return 0

            visit.add((r, c))
            res = sum([
                dfs(r+1, c, cnt+1),
                dfs(r-1, c, cnt+1),
                dfs(r, c+1, cnt+1),
                dfs(r, c-1, cnt+1),
            ])
            visit.remove((r, c))
            return res

        return dfs(start_x, start_y, 0)
```
