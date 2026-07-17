---
date: 2025-09-27
difficulty: Easy
num: 976
related_topics:
  - Array
  - Greedy
  - Math
  - Sorting
return: Done
---

# Problem: 976. Largest Perimeter Triangle

## Description

## Approach / Thoughts
try closest 3 after sorting

## Solution
```python
class Solution:
    def largestPerimeter(self, nums: List[int]) -> int:
        
        def is_degen(a, b, c):
            a, b, c = sorted([a, b, c])
            return a + b <= c

        nums.sort()
        res, n = 0, len(nums)

        for i in range(1, n-1):
            a = nums[i-1]
            b = nums[i]
            c = nums[i+1]

            if not is_degen(a, b, c):
                res = max(res, a + b + c)
        return res
```
