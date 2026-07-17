---
date: 2024-07-13
difficulty: Medium
num: 34
related_topics:
  - Array
  - Binary Search
return: Done
---

# Problem: 34. Find First And Last Position Of Element In Sorted Array

## Description

## Approach / Thoughts
two binary searches find first element, keep going left, find second element

## Solution
```python
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if not nums:
            return [-1, -1]

        first_index = last_index = None
        l, r = 0, len(nums)-1

        while l <= r:
            m = (l + r) // 2

            if nums[m] == target:
                if m > 0 and nums[m] != nums[m-1]:
                    first_index = m
                    break
                elif m == 0:
                    first_index = m
                    break
                else:
                    r = m - 1
            elif nums[m] < target:
                l = m + 1
            else:
                r = m - 1

        if first_index is None:
            return [-1, -1]

        l, r = first_index, len(nums)-1
        while l <= r:
            m = (l + r) // 2

            if nums[m] == target:
                if m < len(nums)-1 and nums[m] != nums[m+1]:
                    return [first_index, m]
                elif m == len(nums)-1:
                    return [first_index, m]
                else:
                    l = m + 1
            elif nums[m] < target:
                l = m + 1
            else:
                r = m - 1
            
```
