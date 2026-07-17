---
date: 2025-01-28
difficulty: Medium
num: 2008
related_topics:
  - Array
  - Binary Search
  - Dynamic Programming
  - Hash Table
return: Done
---

# Problem: 2008. Maximum Earnings From Taxi

## Description
same, pick disjoint intervals

## Approach / Thoughts
dp + binary search

## Solution
```python
class Solution:
    def maxTaxiEarnings(self, n: int, rides: List[List[int]]) -> int:
        rides.sort()

        @lru_cache(None)
        def dfs(i):
            if i >= len(rides):
                return 0

            s, e, t = rides[i]
            idx = bisect_left(rides, e, key=lambda x:x[0])
            
            take = e-s+t + dfs(idx)
            skip = dfs(i + 1)

            return max(take, skip)
        
        return dfs(0)
```
