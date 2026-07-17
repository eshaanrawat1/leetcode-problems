---
date: 2024-06-22
difficulty: Medium
num: 153
related_topics:
  - Array
  - Binary Search
return: Done
---

# Problem: 153. Find Minimum In Rotated Sorted Array

## Description

## Approach / Thoughts
binary search of two portions, left sorted and right sorted

## Solution
```python
class Solution:
    def findMin(self, nums: List[int]) -> int:
        l, r = 0 , len(nums)-1
        res = float("inf")

        while l <= r:
            if nums[l] < nums[r]:
                return min(res, nums[l])

            m = (l + r) // 2
            res = min(res, nums[m])
            if nums[m] >= nums[l]:             
                l = m + 1
            else:
                r = m - 1
        return res
```
