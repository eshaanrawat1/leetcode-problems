---
date: 2026-02-06
difficulty: Medium
num: 3738
related_topics:
  - Array
  - Dynamic Programming
  - Staff
return: Done
---

# Problem: 3738. Longest Non Decreasing Subarray After Replacing At Most One Element

## Description

## Approach / Thoughts
bridge inc end and start

handle edge cases

## Solution
```python
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        n = len(nums)
        if n <= 2:
            return n

        inc_end = [1] * n
        inc_start = [1] * n

        for i in range(1, n):
            if nums[i] >= nums[i-1]:
                inc_end[i] = 1 + inc_end[i-1]
        
        for i in range(n-2, -1, -1):
            if nums[i] <= nums[i+1]:
                inc_start[i] = 1 + inc_start[i+1]

        res = max(inc_end)
        for i in range(n):
            if i != 0 and i != n-1:
                prv = nums[i-1]
                nxt = nums[i+1]
                if prv <= nxt:
                    res = max(res, 1 + inc_end[i-1] + inc_start[i+1])
                else:
                    res = max(res, 1 + inc_end[i-1])

            if i != n-1: res = max(res, 1 + inc_start[i+1])
            if i != 0: res = max(res, 1 + inc_end[i-1])
        return res
```
