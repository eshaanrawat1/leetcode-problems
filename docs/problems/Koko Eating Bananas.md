---
date: 2024-05-11
difficulty: Medium
num: 875
related_topics:
  - Array
  - Binary Search
return: Done
---

# Problem: 875. Koko Eating Bananas

## Description
find if bananas can be eaten

## Approach / Thoughts
constraint → right bound is max value since h ≥ len array

keep checking bounds to find minimum possible rate to eat

## Solution
```python
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        def is_eatable(rate):
            num_hours = 0
            for pile in piles:
                num_hours += math.ceil(pile / rate)
            return num_hours <= h

        res = float("inf")
        l, r = 1, max(piles)

        while l <= r:
            mid = (l + r) // 2
            
            if is_eatable(mid):
                res = min(res, mid)
                r = mid - 1
            else:
                l = mid + 1
        return res
```
