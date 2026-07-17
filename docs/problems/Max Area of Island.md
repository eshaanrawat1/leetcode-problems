---
date: 2024-04-21
difficulty: Medium
num: 695
related_topics:
  - Array
  - BFS
  - DFS
  - Matrix
  - Union Find
return: Done
---

# Problem: 695. Max Area Of Island

## Description
same as find number of islands, find max areas

## Approach / Thoughts
bfs to keep track of count of number of cells

## Solution
```python
class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        res = 0
        for i in range(ROWS):
            for j in range(COLS):
                if grid[i][j] == 1:
                    res = max(res, self.bfs(grid, i, j, ROWS, COLS))
        return res

    def bfs(self, grid, row, col, ROWS, COLS):
        q = deque([[row,col]])
        count = 0

        while q:
            r, c = q.popleft()
            if grid[r][c] == 1: 
                count += 1
                grid[r][c] = '#'
            else: 
                continue

            if r > 0: q.append([r-1, c])
            if r < ROWS-1: q.append([r+1, c])
            if c > 0: q.append([r, c-1])
            if c < COLS-1: q.append([r, c+1])

        return count
```
