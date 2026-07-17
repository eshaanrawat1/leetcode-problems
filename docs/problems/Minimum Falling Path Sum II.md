---
date: 2024-04-25
difficulty: Hard
num: 1289
related_topics:
  - Array
  - Dynamic Programming
  - Matrix
return: Done
---

# Problem: 1289. Minimum Falling Path Sum Ii

## Description
Same as I does not have to be adjacent

## Approach / Thoughts
naive brute force with cache

## Solution
```python
class Solution:
    def minFallingPathSum(self, grid: List[List[int]]) -> int:
        N = len(grid)
        cache = {}

        def dfs(r, c):
            if r == N:
                return 0
            if c < 0 or c == N:
                return float("inf")
            if (r, c) in cache:
                return cache[(r,c)]

            temp = float("inf")
            for i in range(N):
                if i != c:
                    temp = min(temp, dfs(r+1, i))

            temp = temp if temp != float("inf") else 0
            res = grid[r][c] + temp 
            cache[(r,c)] = res
            return res

        res = float("inf")
        for c in range(N):
            res = min(res, dfs(0, c))
        return res
```
