---
date: 2026-02-05
difficulty: Medium
num: 3818
related_topics:
  - Array
  - Senior
return: Done
---

# Problem: 3818. Minimum Prefix Removal To Make Array Strictly Increasing

## Description

## Approach / Thoughts
right to left return first violation

## Solution
```python
class Solution:
    def minimumPrefixLength(self, nums: List[int]) -> int:
        # 2:10
        
        n = len(nums)
        for i in range(n-2, -1, -1):
            if nums[i] >= nums[i+1]:
                return i+1
        return 0
```
