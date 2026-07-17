---
date: 2025-09-30
difficulty: Medium
num: 2221
related_topics:
  - Array
  - Math
  - Simulation
return: Done
---

# Problem: 2221. Find Triangular Sum Of An Array

## Description

## Approach / Thoughts
iterate and sum

## Solution
```python
class Solution:
    def triangularSum(self, nums: List[int]) -> int:
        n = len(nums)

        while n > 1:
            res = []
            for i in range(n-1):
                res.append((nums[i] + nums[i+1]) % 10)
            nums = res
            n = len(nums)
        return nums[0]
```
