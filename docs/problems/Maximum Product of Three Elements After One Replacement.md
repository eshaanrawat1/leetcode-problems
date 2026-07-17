---
date: 2025-11-04
difficulty: Medium
num: 3732
related_topics:
  - Array
return: Done
---

# Problem: 3732. Maximum Product Of Three Elements After One Replacement

## Description

## Approach / Thoughts
replacement can handle any sign, pick top 3 biggest

## Solution
```python
class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        nums.sort(key = lambda x: -abs(x))
        return abs(nums[0] * nums[1] * pow(10, 5))
```
