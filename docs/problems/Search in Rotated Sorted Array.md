---
date: 2024-06-22
difficulty: Medium
num: 33
related_topics:
  - Array
  - Binary Search
return: Review
---

# Problem: 33. Search In Rotated Sorted Array

## Description

## Approach / Thoughts
check which portion we are in, search based on that

## Solution
```python
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l, r = 0, len(nums)-1

        while l <= r:
            m = (l + r) // 2
            if nums[m] == target:
                return m
            
            if nums[l] <= nums[m]:
                if target > nums[m] or target < nums[l]:
                    l = m + 1
                else:
                    r = m - 1
            else:
                if target < nums[m] or target > nums[r]:
                    r = m - 1
                else:
                    l = m + 1
        return -1
```
