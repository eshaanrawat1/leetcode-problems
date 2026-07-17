---
date: 2024-08-19
difficulty: Medium
num: 221
related_topics:
  - Array
  - Dynamic Programming
  - Matrix
return: Done
---

# Problem: 221. Maximal Square

## Description

## Approach / Thoughts
find weak link and max of each cell, dp

## Solution
```python
class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        ROWS, COLS = len(matrix), len(matrix[0])

        @cache
        def dfs(r, c):
            if r < 0 or c < 0 or r >= ROWS or c >= COLS:
                return 0

            if matrix[r][c] == '1':
                res = 1 + min(dfs(r+1, c),
                                   dfs(r, c+1),
                                   dfs(r+1, c+1))
            else:
                res = 0

            return res

        total = 0
        for r in range(ROWS):
            for c in range(COLS):
                total = max(total, dfs(r, c))
        return total * total
```
