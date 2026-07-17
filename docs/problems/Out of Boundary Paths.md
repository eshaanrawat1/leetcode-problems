---
date: 2024-09-05
difficulty: Medium
num: 576
related_topics:
  - Dynamic Programming
return: Done
---

# Problem: 576. Out Of Boundary Paths

## Description

## Approach / Thoughts
dfs for each cell

## Solution
```python
class Solution:
    def findPaths(self, m: int, n: int, maxMove: int, startRow: int, startColumn: int) -> int:
        @cache
        def dfs(i, j, remaining):
            if i < 0 or j < 0 or i >= m or j >= n:
                return 1
            if remaining == 0:
                return 0

            total = sum([
                dfs(i + 1, j, remaining - 1),
                dfs(i - 1, j, remaining - 1),
                dfs(i, j + 1, remaining - 1),
                dfs(i, j - 1, remaining - 1)
            ])

            return total
        return dfs(startRow, startColumn, maxMove) % (10 ** 9 + 7)
```
