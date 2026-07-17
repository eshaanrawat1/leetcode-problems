---
date: 2024-10-26
difficulty: Medium
num: 1277
related_topics:
  - Array
  - Dynamic Programming
  - Matrix
return: Done
---

# Problem: 1277. Count Square Submatrices With All Ones

## Description

## Approach / Thoughts
dp biggest square matrix

## Solution
```python
class Solution:
    def countSquares(self, matrix: List[List[int]]) -> int:
        ROWS, COLS = len(matrix), len(matrix[0])

        for r in range(ROWS):
            for c in range(COLS):
                if r > 0 and c > 0 and matrix[r][c] == 1:
                    matrix[r][c] = 1 + min((
                        matrix[r-1][c],
                        matrix[r-1][c-1],
                        matrix[r][c-1]
                    ))

        total = 0
        for r in range(ROWS):
            for c in range(COLS):
                total += matrix[r][c]
        return total
```
