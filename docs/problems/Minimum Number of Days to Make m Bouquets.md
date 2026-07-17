---
date: 2024-06-18
difficulty: Medium
num: 1482
related_topics:
  - Array
  - Binary Search
return: Done
---

# Problem: 1482. Minimum Number Of Days To Make M Bouquets

## Description
find if we can make boquets

## Approach / Thoughts
binary search

## Solution
```python
class Solution:
    def minDays(self, bloomDay: List[int], m: int, k: int) -> int:
        if len(bloomDay) < m * k:
            return -1

        def feasible(days):
            flowers = boquets = 0
            for b in bloomDay:
                if b <= days:
                    flowers += 1
                else:
                    boquets += (flowers // k)
                    flowers = 0
            boquets += (flowers // k)
            return boquets >= m
        
        l, r = 1, max(bloomDay)
        while l < r:
            mid = (l + r) // 2
            if feasible(mid):
                r = mid
            else:
                l = mid+1
        return l
```
