---
date: 2024-11-01
difficulty: Easy
num: 2016
related_topics:
  - Array
return: Done
---

# Problem: 2016. Maximum Difference Between Increasing Elements

## Description
same - maximum next greater element

## Approach / Thoughts
maximum next greater element

max stack in reverse

## Solution
```python
class Solution:
    def maximumDifference(self, nums: List[int]) -> int:
        n = len(nums)
        max_stack = [float("-inf")] * n

        for i in range(n-2,-1,-1):
            max_stack[i] = max(nums[i+1], max_stack[i+1])

        res = float("-inf")
        for i in range(n):
            res = max(res, max_stack[i] - nums[i])
        return res if res > 0 else -1
```
