---
date: 2024-05-20
difficulty: Medium
num: 152
related_topics:
  - Array
  - Dynamic Programming
return: Done
---

# Problem: 152. Maximum Product Subarray

## Description

## Approach / Thoughts
similar to kadane algorithm, keep track of max and min of subarray as we go

keep track using flips when negative, reset when 0

## Solution
```python
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        curMin, curMax = 1, 1
        res = max(nums)

        for n in nums:
            if n == 0:
                curMin = 1
                curMax = 1
                continue
            
            tmp = curMax * n
            curMax = max(n, curMin*n, curMax*n)
            curMin = min(n, curMin*n, tmp)

            res = max(res, curMax, curMin)
        return res
```
