---
date: 2024-12-12
difficulty: Easy
num: 2319
related_topics:
  - Array
  - Counting
  - Enumeration
  - Greedy
  - Interactive
  - Iterator
  - Math
  - Matrix
  - Simulation
  - Two-Pointer
return: Done
---

# Problem: 2319. Check If Matrix Is X Matrix

## Description

## Approach / Thoughts
check diags and then rows

## Solution
```python
class Solution:
    def checkXMatrix(self, grid: List[List[int]]) -> bool:
        N = len(grid)

        diag = set()
        for r in range(N):
            if grid[r][r] == 0 or grid[r][N-r-1] == 0:
                return False

            diag.add((r, r))
            diag.add((r, N-r-1))

        for r in range(N):
            for c in range(N):
                if (r, c) in diag:
                    continue
                if grid[r][c] != 0:
                    return False
        return True
```
