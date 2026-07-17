---
date: 2024-08-08
difficulty: Medium
num: 59
related_topics:
  - Array
  - Matrix
  - Simulation
return: Review
---

# Problem: 59. Spiral Matrix Ii

## Description
same, fill matrix

## Approach / Thoughts
trace steps and count right, down, left up

r, d-1, l-1, u-2

## Solution
```python
class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        res = [[0] * n for _ in range(n)]

        cur = 1
        steps = n

        r, c = 0, -1
        while cur != n**2+1:
            # move right and fill 
            for i in range(steps):
                c += 1
                res[r][c] = cur
                cur += 1

            # dec
            steps -= 1

            # move down and fill
            for i in range(steps):
                r += 1
                res[r][c] = cur
                cur += 1

            # move left and fill
            for i in range(steps):
                c -= 1
                res[r][c] = cur
                cur += 1
            
            # dec
            steps -= 1

            # move up and fill
            for i in range(steps):
                r -= 1
                res[r][c] = cur
                cur += 1
        return res
```
