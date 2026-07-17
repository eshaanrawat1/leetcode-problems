---
date: 2024-10-03
difficulty: Medium
num: 1590
related_topics:
  - Array
  - Hash Table
  - Prefix Sum
return: Review
---

# Problem: 1590. Make Sum Divisible By P

## Description

## Approach / Thoughts
prefix sum find divisible complement - subarray starting at i that we have to remove

sum(nums) % p = sum(sub) % p

target = (A[i] - A[j]) % p

A[i] % p = (target - A[j]) % p

## Solution
```python
class Solution:
    def minSubarray(self, nums: List[int], p: int) -> int:
        cur, target, res = 0, sum(nums) % p, float("inf")
        if target == 0:
            return 0

        seen = {0: 0}
        for i, n in enumerate(nums):
            cur = (cur + n) % p

            comp = (cur - target) % p
            if comp in seen:
                res =  min(res, i-seen[comp]+1)
            
            seen[cur] = i+1

        return res if res < len(nums) else -1
```
