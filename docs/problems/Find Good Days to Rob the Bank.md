---
date: 2025-01-15
difficulty: Medium
num: 2100
related_topics:
  - Array
  - Dynamic Programming
  - Prefix Sum
return: Done
---

# Problem: 2100. Find Good Days To Rob The Bank

## Description
same as 2420

## Approach / Thoughts
dp for inc and dec, account for local min

## Solution
```python
class Solution:
    def goodDaysToRobBank(self, nums: List[int], k: int) -> List[int]: 
        n = len(nums)
        if k == 0:
            return list(range(n))

        dec = [1] * (n + 1)
        inc = [1] * (n + 1)

        for i in range(1, n):
            if nums[i] <= nums[i-1]:
                dec[i] += dec[i-1]
        
        for i in range(n-2, -1, -1):
            if nums[i] <= nums[i+1]:
                inc[i] += inc[i+1]

        res = []
        for i in range(1, n-1):
            if dec[i-1] >= k and inc[i+1] >= k:
                if nums[i-1] >= nums[i] and nums[i+1] >= nums[i]:
                    res.append(i)
        return res
```
