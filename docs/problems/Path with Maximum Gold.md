---
date: 2024-05-13
difficulty: Medium
num: 1219
related_topics:
  - Array
  - Backtracking
  - Matrix
return: Done
---

# Problem: 1219. Path With Maximum Gold

## Description
find max path in matrix not 0

## Approach / Thoughts
dfs consider every possible valid path, similar to word search

## Solution
```python
class Solution:
    def getMaximumGold(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        
        visited = set()
        def dfs(r, c):
            if r < 0 or r >= ROWS or c < 0 or c >= COLS:
                return 0
            if grid[r][c] == 0 or (r, c) in visited:
                return 0
            
            res = 0
            visited.add((r, c))
            res = max(res, grid[r][c] + dfs(r+1,c),
                           grid[r][c] + dfs(r-1,c),
                           grid[r][c] + dfs(r,c+1),
                           grid[r][c] + dfs(r,c-1))
            visited.remove((r, c))
            return res


        result = 0
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] != 0:
                    result = max(result, dfs(r, c))
        return result
```
