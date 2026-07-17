---
date: 2025-01-10
difficulty: Medium
num: 48
related_topics:
  - Array
  - Math
  - Matrix
return: Done
---

# Problem: 48. Rotate Image

## Description

## Approach / Thoughts
reverse columns swap symmetry

## Solution
```python
class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        n = len(matrix)
        for c in range(n):
            l, r = 0, n - 1
            while l < r:
                matrix[l][c], matrix[r][c] = matrix[r][c], matrix[l][c]
                l += 1
                r -= 1

        for r in range(n):
            for c in range(r + 1, n):
                matrix[r][c], matrix[c][r] = matrix[c][r], matrix[r][c]   
```
