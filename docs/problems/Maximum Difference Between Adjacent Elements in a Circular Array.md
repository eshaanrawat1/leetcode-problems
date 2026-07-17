---
date: 2025-06-11
difficulty: Easy
num: 3423
related_topics:
  - Array
return: Done
---

# Problem: 3423. Maximum Difference Between Adjacent Elements In A Circular Array

## Description

## Approach / Thoughts
loop

## Solution
```python
class Solution:
    def maxAdjacentDistance(self, nums: List[int]) -> int:
        diff = abs(nums[-1] - nums[0])
        for i in range(1, len(nums)):
            diff = max(diff, abs(nums[i] - nums[i-1]))
        return diff
```
