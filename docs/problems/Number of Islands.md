---
date: 2024-04-18
difficulty: Medium
num: 200
related_topics:
  - Array
  - BFS
  - DFS
  - Matrix
  - Union Find
return: Done
---

# Problem: 200. Number Of Islands

## Description
Same as problem, binary grid

## Approach / Thoughts
dfs, flip visited cells

## Solution
```python
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])

        if not grid: return 0

        count = 0
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == '1':
                    self.dfs(grid, r, c)
                    count += 1
        return count

    def dfs(self, grid, r, c):
        if r < 0 or r >= len(grid) or c < 0 or c >= len(grid[0]): return 
        if grid[r][c] != '1': return 

        grid[r][c] = '#'

        self.dfs(grid, r+1, c)
        self.dfs(grid, r-1, c)
        self.dfs(grid, r, c+1)
        self.dfs(grid, r, c-1)
```
