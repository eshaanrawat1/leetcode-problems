---
date: 2025-03-26
difficulty: Medium
num: 3148
related_topics:
  - Array
  - Dynamic Programming
  - Matrix
return: Done
---

# Problem: 3148. Maximum Difference Score In A Grid

## Description
same, score is c2-c1, max score

can start and end at any cell

## Approach / Thoughts
c3-c2 + c2-c1 = c3-c1 → score is only the diff of last cell and first cell

for each cell find min value to its top left

## Solution
```python
class Solution:
    def maxScore(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        min_val = [[inf] * n for _ in range(m)]

        res = -inf
        min_val[0][0] = grid[0][0]
        for i in range(1, m):
            min_val[i][0] = min(min_val[i-1][0], grid[i-1][0])
            res = max(res, grid[i][0] - min_val[i][0])

        
        for i in range(m):
            for j in range(n):
                if j > 0:
                    min_val[i][j] = min(min_val[i][j-1], grid[i][j-1])
                    if i > 0:
                        min_val[i][j] = min(min_val[i][j], min_val[i-1][j], grid[i-1][j])
                    res = max(res, grid[i][j] - min_val[i][j])
        return res
```
