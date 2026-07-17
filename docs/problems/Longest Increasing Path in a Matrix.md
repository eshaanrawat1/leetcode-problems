---
date: 2024-08-18
difficulty: Hard
num: 329
related_topics:
  - Array
  - BFS
  - DFS
  - Dynamic Programming
  - Graph
  - Matrix
  - Memoization
  - Topological Sort
return: Done
---

# Problem: 329. Longest Increasing Path In A Matrix

## Description

## Approach / Thoughts
dfs, add one if there is increasing path, return max

cache results and check dfs for each cell

## Solution
```python
class Solution:
    def longestIncreasingPath(self, matrix: List[List[int]]) -> int:
        ROWS, COLS = len(matrix), len(matrix[0])

        cache = {}
        def dfs(r, c):
            if (r, c) in cache:
                return cache[(r, c)]

            res = 1
            cur = matrix[r][c]

            for x, y in [[r+1, c], [r-1, c], [r, c+1], [r,c-1]]:
                if 0 <= x < ROWS and 0 <= y < COLS:
                    if matrix[x][y] > cur:
                        res = max(res, 1 + dfs(x, y))

            cache[(r, c)] = res
            return res

        total = 0
        for r in range(ROWS):
            for c in range(COLS):
                total = max(total, dfs(r, c))
        return total
```
