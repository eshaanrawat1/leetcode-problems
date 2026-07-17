---
date: 2024-11-25
difficulty: Hard
num: 1745
related_topics:
  - Dynamic Programming
  - String
return: Done
---

# Problem: 1745. Palindrome Partitioning Iv

## Description
cut palindrome in 3 parts

## Approach / Thoughts
top down dp keep track of parts

## Solution
```python
class Solution:
    def checkPartitioning(self, s: str) -> bool:
        
        @lru_cache(None)
        def dfs(i, parts):
            if i >= len(s):
                return parts == 3
            if parts > 3:
                return False

            for j in range(i, len(s)):
                pal = s[i:j+1]
                if pal == pal[::-1]:
                    if dfs(j+1, parts+1):
                        return True
            return False
        
        return dfs(0, 0)
```
