---
date: 2025-02-03
difficulty: Easy
num: 1800
related_topics:
  - Array
return: Done
---

# Problem: 1800. Maximum Ascending Subarray Sum

## Description

## Approach / Thoughts
track inc

## Solution
```python
class Solution:
    def maxAscendingSum(self, nums: List[int]) -> int:
        res, cur = max(nums), 0

        for i in range(len(nums)):
            cur += nums[i]
            res = max(cur, res)
            if i < len(nums) - 1 and nums[i] >= nums[i+1]:
                cur = 0
        return res
```
