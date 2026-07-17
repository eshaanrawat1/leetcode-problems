---
date: 2025-12-28
difficulty: Medium
num: 3788
related_topics:
  - Array
  - Prefix Sum
return: Done
---

# Problem: 3788. Maximum Score Of A Split

## Description

## Approach / Thoughts
prefix suffix simulate

## Solution
```python
class Solution:
    def maximumScore(self, nums: List[int]) -> int:
        # 2:35
        # pretty simple - prefix, suffix calc
        # cant be index-1 
        
        n = len(nums)

        ps = nums[:]
        for i in range(1, n):
            ps[i] += ps[i-1]

        sfmin = [inf] * n
        for i in range(n-2, -1, -1):
            sfmin[i] = min(sfmin[i+1], nums[i+1])

        res = -inf
        for i in range(n-1):
            res = max(res, ps[i]-sfmin[i])
        return res
```
