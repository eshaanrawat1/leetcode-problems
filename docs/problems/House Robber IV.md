---
date: 2025-03-16
difficulty: Medium
num: 2560
related_topics:
  - Array
  - Binary Search
return: Review
---

# Problem: 2560. House Robber Iv

## Description
same, find min capability

## Approach / Thoughts
binary search on possible values, see if possible to rob all houses ≤ threshold

## Solution
```python
class Solution:
    def minCapability(self, nums: List[int], k: int) -> int:
        
        def bs(threshold):
            take = i = 0
            while i < len(nums):
                if nums[i] <= threshold:
                    take += 1
                    i += 1
                i += 1
            return take >= k


        l, r = 1, max(nums)
        res = -1

        while l <= r:
            m = (l + r) // 2
            if bs(m):
                r = m - 1
                res = m
            else:
                l = m + 1
        return res
```
