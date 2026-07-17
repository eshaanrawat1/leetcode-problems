---
date: 2025-12-21
difficulty: Hard
num: 960
related_topics:
  - Array
  - Dynamic Programming
  - String
return: Done
---

# Problem: 960. Delete Columns To Make Sorted Iii

## Description

## Approach / Thoughts
take skip columns dp - for take, all cur > prev

## Solution
```python
class Solution:
    def minDeletionSize(self, strs: List[str]) -> int:
        m, n = len(strs), len(strs[0])

        @lru_cache(None)
        def dfs(i, prev):
            if i >= n:
                return 0 

            skip = 1 + dfs(i+1, prev)
            
            take = inf
            if prev == -1 or all(s[i] >= s[prev] for s in strs):
                take = dfs(i+1, i)
            return min(take, skip)

        return dfs(0, -1)
```
