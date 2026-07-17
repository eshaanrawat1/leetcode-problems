---
date: 2024-07-04
difficulty: Medium
num: 1254
related_topics:
  - Array
  - BFS
  - DFS
  - Matrix
  - Union Find
return: Done
---

# Problem: 1254. Number Of Closed Islands

## Description
find closed islands

## Approach / Thoughts
sink border islands, dfs for remaining islands

## Solution
```python
class Solution:
    def closedIsland(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])

        def sink(r, c):
            if r < 0 or c < 0 or r >= ROWS or c >= COLS:
                return
            if grid[r][c] != 0:
                return

            grid[r][c] = '#'
            sink(r+1, c)
            sink(r-1, c)
            sink(r, c+1)
            sink(r, c-1)


        for c in range(COLS):
            sink(0, c)
            sink(ROWS-1, c)
        
        for r in range(ROWS):
            sink(r, 0)
            sink(r, COLS-1)

        count = 0
        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == 0:
                    count += 1
                    sink(r, c)
        return count
```
