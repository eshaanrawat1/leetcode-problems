---
date: 2025-11-23
difficulty: Hard
num: 10
related_topics:
  - Dynamic Programming
  - Recursion
  - String
return: Done
---

# Problem: 10. Regular Expression Matching

## Description

## Approach / Thoughts
if next char is * skip 2 or try to match

## Solution
```python
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        m, n = len(s), len(p)

        @lru_cache(None)
        def dfs(i, j):
            if j == n:
                return i == m
            
            if j+1 < n and p[j+1] == '*':
                res = dfs(i, j+2)

                if i < m and j < n and (s[i] == p[j] or p[j] == '.'):
                    res = res or dfs(i+1, j)
                return res
            
            if i < m and j < n and (s[i] == p[j] or p[j] == '.'):
                return dfs(i+1, j+1)
            
            return False
        
        return dfs(0, 0)
```
