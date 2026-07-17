---
date: 2025-11-17
difficulty: Easy
num: 3745
related_topics:
  - Array
return: Done
---

# Problem: 3745. Maximize Expression Of Three Elements

## Description
max a+b-c

## Approach / Thoughts
min c, max ab - sort

## Solution
```python
class Solution:
    def maximizeExpressionOfThree(self, nums: List[int]) -> int:
        nums.sort()
        return nums[-1] + nums[-2] - nums[0]
```
