---
date: 2025-03-13
difficulty: Medium
num: 2226
related_topics:
  - Array
  - Binary Search
return: Done
---

# Problem: 2226. Maximum Candies Allocated To K Children

## Description

## Approach / Thoughts
binary search on possible allocations

## Solution
```python
class Solution:
    def maximumCandies(self, candies: List[int], k: int) -> int:
        
        def bs(threshold):
            cnt = 0
            for c in candies:
                cnt += (c // threshold)
            return cnt >= k
        
        l, r = 1, sum(candies) // k
        res = 0

        while l <= r:
            mid = (l + r) // 2
            if bs(mid):
                l = mid + 1
                res = mid
            else:
                r = mid - 1
        return res
```
