---
date: 2024-08-08
difficulty: Medium
num: 885
related_topics:
  - Array
  - Matrix
  - Simulation
return: Done
---

# Problem: 885. Spiral Matrix Iii

## Description

## Approach / Thoughts
follow lr, ud steps and increments

## Solution
```python
class Solution:
    def spiralMatrixIII(self, rows: int, cols: int, rStart: int, cStart: int) -> List[List[int]]:
        def in_bounds(r, c):
            return 0 <= r < rows and 0 <= c < cols

        res = [[rStart, cStart]]

        r, c = rStart, cStart
        steps = 1

        for i in range(max(rows, cols)):

            # go right steps
            for i in range(steps):
                c += 1
                if in_bounds(r, c):
                    res.append([r, c])

            # go down steps
            for i in range(steps):
                r += 1
                if in_bounds(r, c):
                    res.append([r, c])
            # inc 
            steps += 1

            # go left steps
            for i in range(steps):
                c -= 1
                if in_bounds(r, c):
                    res.append([r, c])

            # go up steps
            for i in range(steps):
                r -= 1
                if in_bounds(r, c):
                    res.append([r, c])

            # inc
            steps += 1
        return res
```
