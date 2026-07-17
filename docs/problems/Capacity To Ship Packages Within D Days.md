---
date: 2024-05-11
difficulty: Medium
num: 1011
related_topics:
  - Array
  - Binary Search
return: Done
---

# Problem: 1011. Capacity To Ship Packages Within D Days

## Description
find capacity of packages

## Approach / Thoughts
check condition for binary search

reset capacity if we overflow

## Solution
```python
class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        def feasible(capacity):
            current, num_days = 0, 1
            for w in weights:
                if current + w > capacity:
                    num_days += 1
                    current = 0
                current += w
            return num_days <= days

        res = float("inf")
        l, r = max(weights), sum(weights)
        while l <= r:
            mid = (l + r) // 2
            if feasible(mid):
                res = min(res, mid)
                r = mid - 1
            else:
                l = mid + 1
        return res
```
