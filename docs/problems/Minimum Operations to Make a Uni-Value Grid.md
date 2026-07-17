---
date: 2025-03-25
difficulty: Medium
num: 2033
related_topics:
  - Array
  - Math
  - Matrix
  - Sorting
return: Done
---

# Problem: 2033. Minimum Operations To Make A Uni Value Grid

## Description

## Approach / Thoughts
check if operation amount can convert between numbers

make everything to mid position

## Solution
```python
class Solution:
    def minOperations(self, grid: List[List[int]], x: int) -> int:
        m, n = len(grid), len(grid[0])

        res = []
        for i in range(m):
            for j in range(n):
                res.append(grid[i][j])

        res.sort()
        for i in range(1, m*n):
            diff = res[i] - res[i-1]
            if diff % x:
                return -1

        def ops(pos):
            pivot = res[pos]

            cnt = 0
            for num in res:
                cnt += abs(pivot - num) // x
            return cnt

        return ops(m*n // 2)
```
