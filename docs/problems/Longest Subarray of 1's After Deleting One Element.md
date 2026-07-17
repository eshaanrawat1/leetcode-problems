---
date: 2024-10-11
difficulty: Medium
num: 1493
related_topics:
  - Array
  - Dynamic Programming
  - Sliding Window
return: Done
---

# Problem: 1493. Longest Subarray Of 1'S After Deleting One Element

## Description

## Approach / Thoughts
sliding window

## Solution
```python
class Solution:
    def longestSubarray(self, nums: List[int]) -> int:
        l = res = zero_cnt = 0

        for r in range(len(nums)):
            if nums[r] == 0:
                zero_cnt += 1

            while zero_cnt > 1:
                if nums[l] == 0:
                    zero_cnt -= 1
                l += 1
            
            res = max(res, r-l)
        return res
```
