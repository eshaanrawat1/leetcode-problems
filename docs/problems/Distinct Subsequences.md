---
date: 2024-09-06
difficulty: Hard
num: 115
related_topics:
  - Dynamic Programming
  - String
return: Done
---

# Problem: 115. Distinct Subsequences

## Description

## Approach / Thoughts
if match, add match and move on

else just move on

## Solution
```python
class Solution:
    def numDistinct(self, s: str, t: str) -> int:
        @cache
        def dfs(i, j):
            if j == -1: return 1
            if i == -1: return 0

            if s[i] == t[j]: return dfs(i-1, j-1) + dfs(i-1, j)
            return dfs(i-1, j)
        return dfs(len(s)-1, len(t)-1)
```
