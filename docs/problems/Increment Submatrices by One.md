---
date: 2025-10-04
difficulty: Medium
num: 2536
related_topics:
  - Array
  - Matrix
  - Prefix Sum
return: Done
---

# Problem: 2536. Increment Submatrices By One

## Description

## Approach / Thoughts
range prefix sum on row

## Solution
```python
class Solution:
    def rangeAddQueries(self, n: int, queries: List[List[int]]) -> List[List[int]]:
        rows = [[0] * n for _ in range(n)]

        for r1, c1, r2, c2 in queries:
            for j in range(r1, r2+1):
                rows[j][c1] += 1
                if c2 != n-1:
                    rows[j][c2+1] -= 1

        for i in range(n):
            for j in range(1, n):
                rows[i][j] += rows[i][j-1]
        return rows
```
