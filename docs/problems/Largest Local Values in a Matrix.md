---
date: 2024-05-11
difficulty: Easy
num: 2373
related_topics:
  - Array
  - Matrix
return: Done
---

# Problem: 2373. Largest Local Values In A Matrix

## Description
find local max in 3x3 subgrid

## Approach / Thoughts
4 loops

## Solution
```python
class Solution:
    def largestLocal(self, grid: List[List[int]]) -> List[List[int]]:
        N = len(grid)
        max_local = [[0 for _ in range(N-2)] for _ in range(N-2)]

        for i in range(N-2):
            for j in range(N-2):
                max_local[i][j] = self.find_max(grid,i,j)
        return max_local

    def find_max(self, grid, r, c):
        res = float("-inf")
        for i in range(r,r+3):
            for j in range(c, c+3):
                res = max(res, grid[i][j])
        return res
```
