---
date: 2024-10-03
difficulty: Hard
num: 154
related_topics:
  - Array
  - Binary Search
return: Done
---

# Problem: 154. Find Minimum In Rotated Sorted Array Ii

## Description

## Approach / Thoughts
regular binary search for finding half

if not sure, just do one decrement

## Solution
```python
class Solution:
    def findMin(self, nums: List[int]) -> int:
        l, r = 0, len(nums)-1
        res = 1e9

        while l <= r:
            m = (l + r) // 2

            res = min(res, nums[m])
            if nums[l] < nums[r]:
                return min(nums[l], res)

            if nums[m] > nums[r]:
                l = m + 1
            elif nums[m] == nums[r]:
                r -= 1
            else:
                r = m - 1
            
        return res
```
