---
date: 2024-08-10
difficulty: Medium
num: 959
related_topics:
  - Array
  - BFS
  - DFS
  - Hash Table
  - Matrix
  - Union Find
return: Done
---

# Problem: 959. Regions Cut By Slashes

## Description

## Approach / Thoughts
expand grid to *3 to dfs flood fill graph

## Solution
```python
class Solution:
    def regionsBySlashes(self, grid: List[str]) -> int:
        n, res = len(grid), 0
        g = [[0] * n * 3 for _ in range(n * 3)]

        for i in range(n):
            for j in range(n):
                if grid[i][j] == '/':
                    g[i * 3][j * 3 + 2] = g[i * 3 + 1][j * 3 + 1] = g[i * 3 + 2][j * 3] = 1
                elif grid[i][j] == '\\':
                    g[i * 3][j * 3] = g[i * 3 + 1][j * 3 + 1] = g[i * 3 + 2][j * 3 + 2] = 1

        def dfs(r, c):
            if r < 0 or r >= n*3 or c < 0 or c >= n*3 or g[r][c] == 1:
                return 0
            g[r][c] = 1
            return 1 + dfs(r+1, c) + dfs(r-1, c) + dfs(r, c+1) + dfs(r, c-1)
      
        for i in range(n * 3):
            for j in range(n * 3):
                if dfs(i, j):
                    res += 1
        return res
```
