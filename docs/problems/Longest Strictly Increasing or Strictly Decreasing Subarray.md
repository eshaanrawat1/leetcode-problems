---
date: 2024-04-27
difficulty: Easy
num: 3105
related_topics:
  - Array
return: Done
---

# Problem: 3105. Longest Strictly Increasing Or Strictly Decreasing Subarray

## Description
same as title

## Approach / Thoughts
keep track of inc and dec counters and take max

reset when streak is broken

## Solution
```python
class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        dec = inc = 1
        res = 1
        for i in range(1, len(nums)):
            if nums[i] > nums[i-1]:
                inc += 1
            else:
                inc = 1
            
            if nums[i] < nums[i-1]:
                dec += 1
            else:
                dec = 1
            
            res = max(res, dec, inc)
        return res
```
