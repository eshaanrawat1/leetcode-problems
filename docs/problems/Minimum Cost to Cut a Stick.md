---
date: 2026-02-26
difficulty: Hard
num: 1547
related_topics:
  - Array
  - Dynamic Programming
  - Principal
  - Sorting
return: Done
---

# Problem: 1547. Minimum Cost To Cut A Stick

## Description
same, cost is length of stick

## Approach / Thoughts
take min of possible cuts

cut is possible if in between, not inclusive

## Solution
```python
class Solution:
    def minCost(self, n: int, cuts: List[int]) -> int:
        
        @lru_cache(None)
        def dfs(start, end):
            res = inf
            for c in cuts:
                if start < c < end:
                    res = min(res, end - start + dfs(start, c) + dfs(c, end))
            return res if res != inf else 0
        return dfs(0, n)
```
