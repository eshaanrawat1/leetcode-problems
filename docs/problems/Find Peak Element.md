---
date: 2024-05-11
difficulty: Medium
num: 162
related_topics:
  - Array
  - Binary Search
return: Done
---

# Problem: 162. Find Peak Element

## Description

## Approach / Thoughts
check logic of always picking greater neighbor, eventually find peak

no two elements equal if adjacent

## Solution
```python
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        N = len(nums)
        l, r = 0, N-1

        while l <= r:
            m = (l + r) // 2

            # left neighbor greater
            if m > 0 and nums[m-1] > nums[m]:
                r = m-1
            # right neighbor greater
            elif m < N-1 and nums[m+1] > nums[m]:
                l = m+1
            else:
                return m
```
