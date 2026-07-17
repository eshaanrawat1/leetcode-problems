---
date: 2024-07-03
difficulty: Hard
num: 1095
related_topics:
  - Array
  - Binary Search
  - Interactive
return: Done
---

# Problem: 1095. Find In Mountain Array

## Description

## Approach / Thoughts
find peak

binary search both halves

## Solution
```python
# """
# This is MountainArray's API interface.
# You should not implement it, or speculate about its implementation
# """
\#class MountainArray:
#    def get(self, index: int) -> int:
#    def length(self) -> int:

class Solution:
    def findInMountainArray(self, target: int, mountain_arr: 'MountainArray') -> int:
        peak_index = None
        l, r = 0, mountain_arr.length()-1
        while l <= r:
            m = (l + r) // 2
            if mountain_arr.get(m) > mountain_arr.get(m+1):
                peak_index = m
                r = m - 1
            else:
                l = m + 1
        
        left_l, left_r = 0, peak_index
        while left_l <= left_r:
            left_mid = (left_l + left_r) // 2
            if mountain_arr.get(left_mid) == target:
                return left_mid
            elif mountain_arr.get(left_mid) < target:
                left_l = left_mid + 1
            else:
                left_r = left_mid - 1
        
        right_l, right_r = peak_index, mountain_arr.length()-1
        while right_l <= right_r:
            right_mid = (right_l + right_r) // 2
            if mountain_arr.get(right_mid) == target:
                return right_mid
            elif mountain_arr.get(right_mid) < target:
                right_r = right_mid - 1
            else:
                right_l = right_mid + 1
        return -1
```
