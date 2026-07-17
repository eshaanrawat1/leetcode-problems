---
date: 2025-02-28
difficulty: Easy
num: 2460
related_topics:
  - Array
  - Simulation
  - Two-Pointer
return: Done
---

# Problem: 2460. Apply Operations To An Array

## Description

## Approach / Thoughts
brute force

## Solution
```python
class Solution:
    def applyOperations(self, nums: List[int]) -> List[int]:
        n = len(nums)
        for i in range(n-1):
            if nums[i] == nums[i+1]:
                nums[i] *= 2
                nums[i+1] = 0
        
        return [x for x in nums if x] + [x for x in nums if not x]
```
