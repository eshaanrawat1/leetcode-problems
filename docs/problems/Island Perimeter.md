---
date: 2024-04-17
difficulty: Easy
num: 463
related_topics:
  - Array
  - BFS
  - DFS
  - Matrix
return: Done
---

# Problem: 463. Island Perimeter

## Description
Find perimeter of island of 1s and 0s

## Approach / Thoughts
Get 4 for base perimeter, subtract from adjacent cells if needed

## Solution
```python
class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        perimeter = 0

        for r in range(ROWS):
            for c in range(COLS):
                perimeter += 4*grid[r][c]
                
                if grid[r][c] == 1:
                    if r > 0: perimeter -= grid[r-1][c]
                    if r < ROWS-1: perimeter -= grid[r+1][c]

                    if c > 0: perimeter -= grid[r][c-1]
                    if c < COLS-1: perimeter -= grid[r][c+1]

        return perimeter
```
