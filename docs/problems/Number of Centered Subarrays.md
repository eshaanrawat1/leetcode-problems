---
date: 2026-01-17
difficulty: Medium
num: 3804
related_topics:
  - Array
  - Enumeration
  - Hash Table
return: Done
---

# Problem: 3804. Number Of Centered Subarrays

## Description

## Approach / Thoughts
brute force count

## Solution
```python
class Solution:
    def centeredSubarrays(self, nums: List[int]) -> int:
        # 1:12 
        # saw constraints - didnt bother with optimization
        
        n = len(nums)
        res = 0

        for i in range(n):
            s = set()
            cur_sum = 0
            for j in range(i, n):
                s.add(nums[j])
                cur_sum += nums[j]

                if cur_sum in s:
                    res += 1
        return res
```
