---
date: 2026-03-19
difficulty: Medium
num: 3212
related_topics:
  - Staff
  - Array
  - Matrix
  - Prefix Sum
return:
---

# Problem:  

## Description
Given a 2D character matrix `grid`, where `grid[i][j]` is either `'X'`, `'Y'`, or `'.'`, return the number of submatrices that contain:

- `grid[0][0]`
- an **equal** frequency of `'X'` and `'Y'`.
- **at least** one `'X'`.

## Example(s)
<!-- Optional: add example inputs/outputs -->

## Approach / Thoughts
prefix sum for rows, build box column at a time

## Solution
```python
class Solution:
    def numberOfSubmatrices(self, grid: List[List[str]]) -> int:
        m, n = len(grid), len(grid[0])

        row_x = [[(grid[i][j] == 'X') for j in range(n)] for i in range(m)]
        row_y = [[(grid[i][j] == 'Y') for j in range(n)] for i in range(m)]

        for i in range(m):
            for j in range(1, n):
                row_x[i][j] += row_x[i][j-1]
                row_y[i][j] += row_y[i][j-1]

        res = 0
        for j in range(n):
            curx = cury = 0
            for i in range(m):
                curx += row_x[i][j]
                cury += row_y[i][j]
                res += (curx == cury and curx >= 1)
        return res
               