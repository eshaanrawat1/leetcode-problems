---
date: 2024-07-29
difficulty: Medium
num: 62
related_topics:
  - Combinatorics
  - Dynamic Programming
  - Math
return: Done
---

# Problem: 62. Unique Paths

## Description

## Approach / Thoughts
dfs with cache

2d dp array where each cell sums to right and down cell

## Solution
```python
class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        cache = {}
        visit = set()

        def dfs(r, c):
            if r >= m or c >= n or (r, c) in visit:
                return 0
            if r == m-1 and c == n-1:
                return 1
            if (r, c) in cache:
                return cache[(r, c)]

            visit.add((r, c))
            res = dfs(r+1,c) + dfs(r, c+1)
            visit.remove((r, c))

            cache[(r, c)] = res
            return res
        return dfs(0, 0)
```
