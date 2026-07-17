---
date: 2025-12-29
difficulty: Medium
num: 462
related_topics:
  - Array
  - Math
  - Sorting
return: Done
---

# Problem: 462. Minimum Moves To Equal Array Elements Ii

## Description

## Approach / Thoughts
optimal is median - binary search on convex parabola

y1, y2 = if y1 > y2 → left side of curve move right, else move left

## Solution
```python
class Solution:
    def minMoves2(self, nums: List[int]) -> int:
        
        def f(target):
            total = 0
            for x in nums:
                total += (abs(target - x))
            return total

        l, r = min(nums), max(nums)
        res = inf

        while l <= r:
            m = (l + r) // 2

            y1, y2 = f(m), f(m+1)
            res = min(res, y1, y2)  
            if y1 > y2:
                l = m + 1
            else:
                r = m - 1
        return res
```
