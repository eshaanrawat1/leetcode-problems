---
date: 2025-08-23
difficulty: Medium
num: 3195
related_topics:
  - Array
  - Matrix
return: Done
---

# Problem: 3195. Find The Minimum Area To Cover All Ones I

## Description

## Approach / Thoughts
max width and max length

## Solution
```python
class Solution:
    def minimumArea(self, grid: List[List[int]]) -> int:
        min_row = min_col = inf
        max_row = max_col = -inf

        m, n = len(grid), len(grid[0])

        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    min_row = min(min_row, i)
                    min_col = min(min_col, j)

                    max_row = max(max_row, i)
                    max_col = max(max_col, j)

        l = (max_col - min_col + 1)
        w = (max_row - min_row + 1)
        return l * w
```
