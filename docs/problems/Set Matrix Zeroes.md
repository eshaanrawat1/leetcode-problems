---
date: 2024-06-11
difficulty: Medium
num: 73
related_topics:
  - Array
  - Hash Table
  - Matrix
return: Review
---

# Problem: 73. Set Matrix Zeroes

## Description
set matrix rows and cols if 0 to 0

## Approach / Thoughts
store in set for rows and cols

## Solution
```python
class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        M, N = len(matrix), len(matrix[0])
        zero_rows, zero_cols = set(), set()

        for r in range(M):
            for c in range(N):
                if matrix[r][c] == 0:
                    zero_rows.add(r)
                    zero_cols.add(c)

        for r in range(M):
            for c in range(N):
                if r in zero_rows or c in zero_cols:
                    matrix[r][c] = 0
```
