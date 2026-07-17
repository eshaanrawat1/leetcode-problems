---
date: 2024-03-15
difficulty: Medium
num: 209
related_topics:
  - Array
  - Binary Search
  - Prefix Sum
  - Sliding Window
return: Done
---

# Problem: 209. Minimum Size Subarray Sum

## Description
Find the minimum size subarray sum that is greater than or equal to target

## Approach / Thoughts
Use sliding window

## Solution
```python
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        l = 0 
        res = float("inf")

        count = 0
        for r in range(len(nums)):
            count += nums[r]

            while l <= r and count >= target:
                res = min(res, r-l+1)
                count -= nums[l]
                l += 1
        return res if res != float("inf") else 0
        
```
