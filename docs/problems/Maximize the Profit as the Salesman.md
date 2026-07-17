---
date: 2025-01-28
difficulty: Medium
num: 2830
related_topics:
  - Array
  - Binary Search
  - Dynamic Programming
  - Hash Table
  - Sorting
return: Done
---

# Problem: 2830. Maximize The Profit As The Salesman

## Description

## Approach / Thoughts
dp + binary search

## Solution
```python
class Solution:
    def maximizeTheProfit(self, n: int, offers: List[List[int]]) -> int:
        offers.sort()

        @lru_cache(None)
        def dfs(i):
            if i >= len(offers):
                return 0

            s,e,w = offers[i]
            idx = bisect_right(offers, e, key=lambda x:x[0])

            take = w + dfs(idx)
            skip = dfs(i + 1)

            return max(take, skip)
        
        return dfs(0)
```
