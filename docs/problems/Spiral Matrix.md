---
date: 2025-02-06
difficulty: Medium
num: 54
related_topics:
  - Array
  - Matrix
  - Simulation
return: Done
---

# Problem: 54. Spiral Matrix

## Description

## Approach / Thoughts
roomba

## Solution
```python
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        m, n = len(matrix), len(matrix[0])

        def in_bounds(r, c):
            return 0 <= r < m and 0 <= c < n

        x = y = 0
        dx, dy = 0, 1

        res = []
        for _ in range(m*n):
            res.append(matrix[x][y])
            matrix[x][y] = -101

            if not in_bounds(x+dx, y+dy) or matrix[x+dx][y+dy] == -101:
                dx, dy = dy, -dx
            
            x += dx
            y += dy
        return res
```
