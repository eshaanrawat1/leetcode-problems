---
date: 2024-08-23
difficulty: Medium
num: 2348
related_topics:
  - Array
  - Math
return: Done
---

# Problem: 2348. Number Of Zero Filled Subarrays

## Description

## Approach / Thoughts
count subarrays

## Solution
```python
class Solution:
    def zeroFilledSubarray(self, nums: List[int]) -> int:      
        i = cnt = 0
        while i < len(nums):
            j = i
            if nums[i] == 0: 
                cur = 1
                while j < len(nums) and nums[j] == 0:
                    j += 1
                    cnt += cur
                    cur += 1
            i = j + 1
        return cnt
```
