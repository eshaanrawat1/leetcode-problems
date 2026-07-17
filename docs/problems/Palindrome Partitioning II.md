---
date: 2024-09-09
difficulty: Hard
num: 132
related_topics:
  - Dynamic Programming
  - String
return: Done
---

# Problem: 132. Palindrome Partitioning Ii

## Description

## Approach / Thoughts
dfs check all options

## Solution
```python
class Solution:
    def minCut(self, s: str) -> int:
        
        @cache
        def dfs(i):
            if i >= len(s):
                return 0
            if s[i:] == s[i:][::-1]:
                return 0

            res = 1e9
            for j in range(i, len(s)):
                if s[i:j+1] == s[i:j+1][::-1]:
                    res = min(res, 1 + dfs(j+1))
            return res
        return dfs(0) 
```
