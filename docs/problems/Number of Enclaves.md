---
date: 2024-07-04
difficulty: Medium
num: 1020
related_topics:
  - Array
  - BFS
  - DFS
  - Matrix
  - Union Find
return: Done
---

# Problem: 1020. Number Of Enclaves

## Description
find number of enclosed islands, and number of cells

## Approach / Thoughts
sink border islands, count remaining 1s

## Solution
```python
class Solution:
    def numEnclaves(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])

        def sink(r, c):
            if r < 0 or c < 0 or r >= ROWS or c >= COLS:
                return
            if grid[r][c] != 1:
                return
            
            grid[r][c] = 0
            sink(r+1, c)
            sink(r-1, c)
            sink(r, c+1)
            sink(r, c-1)
            
        for r in range(ROWS):
            sink(r, 0)
            sink(r, COLS-1)
        
        for c in range(COLS):
            sink(0, c)
            sink(ROWS-1, c)

        count = 0
        for i in range(ROWS):
            for j in range(COLS):
                if grid[i][j] == 1:
                    count += 1
        return count
```
