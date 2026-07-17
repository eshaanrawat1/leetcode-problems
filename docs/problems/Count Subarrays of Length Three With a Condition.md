---
date: 2025-04-26
difficulty: Easy
num: 3392
related_topics:
  - Array
return: Done
---

# Problem: 3392. Count Subarrays Of Length Three With A Condition

## Description
same, first + third element = second / 2

## Approach / Thoughts
iterate over all 3

## Solution
```python
class Solution:
    def countSubarrays(self, nums: List[int]) -> int:
        res = 0
        for i in range(2, len(nums)):
            first = nums[i-2]
            second = nums[i-1]
            third = nums[i]

            if (first + third) == second / 2:
                res += 1
        return res
```
