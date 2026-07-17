---
date: 2024-04-25
difficulty: Medium
num: 931
related_topics:
  - Array
  - Dynamic Programming
  - Matrix
return: Done
---

# Problem: 931. Minimum Falling Path Sum

## Description
Find minimum path sum falling

## Approach / Thoughts
dfs consider every possible branch out and cache it

## Solution
```python
class Solution:
    def minFallingPathSum(self, matrix: List[List[int]]) -> int:
        N = len(matrix)
        cache = {}
        def dfs(r, c):
            if r == N:
                return 0 
            if c < 0 or c == N:
                return float("inf")
            if (r, c) in cache:
                return cache[(r,c)]
            
            res = matrix[r][c] + min (
                dfs(r+1, c-1),
                dfs(r+1, c),
                dfs(r+1, c+1))
            cache[(r,c)] = res
            return res

        res = float("inf")
        for c in range(N):
            res = min(res, dfs(0, c))
        return res        
```
