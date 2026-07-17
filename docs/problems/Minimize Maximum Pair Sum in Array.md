---
date: 2026-01-23
difficulty: Medium
num: 1877
related_topics:
  - Array
  - Greedy
  - Sorting
  - Two-Pointer
return: Done
---

# Problem: 1877. Minimize Maximum Pair Sum In Array

## Description

## Approach / Thoughts
pair max and min

## Solution
```python
class Solution:
    def minPairSum(self, nums: List[int]) -> int:
        nums.sort()

        res = 0
        for i in range(len(nums)):
            res = max(res, nums[i] + nums[~i])
        return res
```
